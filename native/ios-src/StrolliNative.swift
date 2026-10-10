// Strolli: nativer Audio-Player + Live Activity (Sperrbildschirm / Dynamic Island).
// Wird von native/scripts/patch-ios.mjs an ios/App/App/SceneDelegate.swift angehängt (dort nicht von Hand ändern,
// sondern hier – dann `npm run sync`). Benötigte Imports: AVFoundation, ActivityKit, AppIntents (setzt das Skript).

/// Ersetzt den Standard-Controller von Capacitor, um das Strolli-Plugin zu registrieren.
class StrolliBridgeViewController: CAPBridgeViewController {
    override func capacitorDidLoad() {
        bridge?.registerPluginInstance(StrolliAudioPlugin())
    }
}

let strolliRemoteNotification = Notification.Name("StrolliRemoteCommand")

// MARK: - Audio

/// Spielt die KI-Audios (MP3) bzw. die Gerätestimme nativ ab.
/// Die Audio-Sitzung ist „mischbar“: Musik anderer Apps läuft weiter und wird nur während einer Ansage leiser.
@objc(StrolliAudioPlugin)
public class StrolliAudioPlugin: CAPPlugin, CAPBridgedPlugin, AVSpeechSynthesizerDelegate {
    public let identifier = "StrolliAudioPlugin"
    public let jsName = "StrolliAudio"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "play", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "speak", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "pause", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "resume", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "stop", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "setRate", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "tour", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "endTour", returnType: CAPPluginReturnPromise),
    ]

    private var player: AVPlayer?
    private var endObserver: NSObjectProtocol?
    private var failObserver: NSObjectProtocol?
    private var statusObserver: NSKeyValueObservation?
    private var remoteObserver: NSObjectProtocol?
    private let synth = AVSpeechSynthesizer()
    private var utterance: AVSpeechUtterance?
    private var rate: Float = 1
    private var currentId = ""
    private var gen = 0

    override public func load() {
        synth.delegate = self
        print("[Strolli] Audio-Plugin geladen")
        // Knöpfe der Live Activity → an die App (JavaScript) weiterreichen
        // Knöpfe der Live Activity: sofort nativ ausführen (die Web-Ansicht kann bei gesperrtem Bildschirm pausiert sein)
        // und der App (JavaScript) Bescheid geben, damit ihr Zustand stimmt.
        remoteObserver = NotificationCenter.default.addObserver(forName: strolliRemoteNotification, object: nil, queue: .main) { [weak self] n in
            guard let self = self, let action = n.object as? String else { return }
            NSLog("[Strolli] Knopf in der Live Activity: %@", action)
            if action == "toggle" {
                let nowPaused = self.togglePause()
                self.notifyListeners("remote", data: ["action": nowPaused ? "paused" : "resumed"])
                if #available(iOS 16.2, *) { StrolliActivity.shared.patch(playing: !nowPaused) }
            } else if action == "skip" {
                self.halt()
                self.currentId = ""
                self.gen += 1
                self.scheduleDeactivate()
                self.notifyListeners("remote", data: ["action": "skipped"])
                if #available(iOS 16.2, *) { StrolliActivity.shared.patch(playing: false, clearAudio: true) }
            }
        }
        // Darwin-Benachrichtigungen der Widget-Knöpfe empfangen und als lokale Benachrichtigung weitergeben
        let center = CFNotificationCenterGetDarwinNotifyCenter()
        for action in ["toggle", "skip"] {
            CFNotificationCenterAddObserver(center, nil, { _, _, name, _, _ in
                guard let n = name else { return }
                let raw = n.rawValue as String
                let action = raw.hasSuffix("toggle") ? "toggle" : "skip"
                NSLog("[Strolli] Darwin-Nachricht empfangen: %@", action)
                DispatchQueue.main.async { NotificationCenter.default.post(name: strolliRemoteNotification, object: action) }
            }, "com.greimel.strolli.\(action)" as CFString, nil, .deliverImmediately)
        }
        if #available(iOS 16.2, *) { StrolliActivity.endAll() }   // Reste einer abgebrochenen Tour entfernen
    }

    // MARK: Audio-Sitzung
    /// Audio-Sitzung an- und abschalten dauert spürbar – deshalb nicht im Haupt-Thread (sonst hakt die Bedienung).
    private let sessionQueue = DispatchQueue(label: "strolli.audiosession")
    private func activate(then done: @escaping () -> Void) {
        sessionQueue.async {
            let s = AVAudioSession.sharedInstance()
            try? s.setCategory(.playback, mode: .spokenAudio, options: [.duckOthers, .interruptSpokenAudioAndMixWithOthers])
            do { try s.setActive(true) } catch { print("[Strolli] Audio-Sitzung: \(error)") }
            DispatchQueue.main.async(execute: done)
        }
    }
    private func deactivate() {
        sessionQueue.async { try? AVAudioSession.sharedInstance().setActive(false, options: .notifyOthersOnDeactivation) }
    }
    /// Nach der Ansage die Sitzung freigeben, damit Musik wieder in voller Lautstärke spielt.
    private func scheduleDeactivate() {
        let g = gen
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.7) { [weak self] in
            guard let self = self, self.gen == g, self.player == nil, !self.synth.isSpeaking else { return }
            self.deactivate()
        }
    }

    // MARK: Abspielen
    @objc func play(_ call: CAPPluginCall) {
        guard let s = call.getString("url"), let url = URL(string: s) else { call.reject("Ungültige Audio-Adresse"); return }
        let id = call.getString("id") ?? ""
        if let r = call.getDouble("rate") { rate = Float(r) }
        DispatchQueue.main.async {
            self.halt()
            self.gen += 1
            self.currentId = id
            let g = self.gen
            let item = AVPlayerItem(url: url)
            item.audioTimePitchAlgorithm = .timeDomain
            let p = AVPlayer(playerItem: item)
            self.player = p
            self.endObserver = NotificationCenter.default.addObserver(forName: .AVPlayerItemDidPlayToEndTime, object: item, queue: .main) { [weak self] _ in
                self?.finished(id)
            }
            self.failObserver = NotificationCenter.default.addObserver(forName: .AVPlayerItemFailedToPlayToEndTime, object: item, queue: .main) { [weak self] _ in
                self?.failed(id, "Abspielen abgebrochen")
            }
            self.statusObserver = item.observe(\.status, options: [.new]) { [weak self] it, _ in
                if it.status == .failed {
                    let msg = it.error?.localizedDescription ?? "Audio-Fehler"
                    DispatchQueue.main.async { self?.failed(id, msg) }
                }
            }
            self.activate { [weak self] in
                guard let self = self, self.gen == g, self.player === p else { return }
                p.playImmediately(atRate: self.rate)
                print("[Strolli] spiele \(url.lastPathComponent)")
            }
            call.resolve()
        }
    }

    @objc func speak(_ call: CAPPluginCall) {
        let text = call.getString("text") ?? ""
        let id = call.getString("id") ?? ""
        if let r = call.getDouble("rate") { rate = Float(r) }
        DispatchQueue.main.async {
            self.halt()
            self.gen += 1
            self.currentId = id
            let g = self.gen
            let u = AVSpeechUtterance(string: text)
            u.voice = StrolliAudioPlugin.germanVoice()
            u.rate = min(AVSpeechUtteranceMaximumSpeechRate, AVSpeechUtteranceDefaultSpeechRate * (0.5 + 0.5 * self.rate))
            self.utterance = u
            self.activate { [weak self] in
                guard let self = self, self.gen == g, self.utterance === u else { return }
                self.synth.speak(u)
                print("[Strolli] Gerätestimme: \(text.prefix(40))")
            }
            call.resolve()
        }
    }

    static func germanVoice() -> AVSpeechSynthesisVoice? {
        let vs = AVSpeechSynthesisVoice.speechVoices().filter { $0.language == "de-DE" }
        return vs.max(by: { $0.quality.rawValue < $1.quality.rawValue }) ?? AVSpeechSynthesisVoice(language: "de-DE")
    }

    public func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didFinish utterance: AVSpeechUtterance) {
        guard utterance === self.utterance else { return }
        finished(currentId)
    }

    /// Pausiert bzw. setzt fort. Rückgabe: true, wenn jetzt pausiert ist.
    private func togglePause() -> Bool {
        let playing = (player.map { $0.rate != 0 } ?? false) || (synth.isSpeaking && !synth.isPaused)
        if playing {
            player?.pause()
            if synth.isSpeaking { synth.pauseSpeaking(at: .word) }
            deactivate()
            return true
        }
        activate { [weak self] in
            guard let self = self else { return }
            if let p = self.player { p.playImmediately(atRate: self.rate) }
            if self.synth.isPaused { self.synth.continueSpeaking() }
        }
        return false
    }

    @objc func pause(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.player?.pause()
            if self.synth.isSpeaking { self.synth.pauseSpeaking(at: .word) }
            // Während der Pause soll die Musik wieder normal laut sein
            self.deactivate()
            call.resolve()
        }
    }

    @objc func resume(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.activate { [weak self] in
                guard let self = self else { return }
                if let p = self.player { p.playImmediately(atRate: self.rate) }
                if self.synth.isPaused { self.synth.continueSpeaking() }
            }
            call.resolve()
        }
    }

    @objc func stop(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.halt()
            self.currentId = ""
            self.gen += 1
            self.scheduleDeactivate()
            call.resolve()
        }
    }

    @objc func setRate(_ call: CAPPluginCall) {
        let r = Float(call.getDouble("rate") ?? 1)
        DispatchQueue.main.async {
            self.rate = r
            if let p = self.player, p.rate != 0 { p.rate = r }
            call.resolve()
        }
    }

    private func finished(_ id: String) {
        guard id == currentId else { return }
        clearPlayer()
        utterance = nil
        currentId = ""
        notifyListeners("ended", data: ["id": id])
        scheduleDeactivate()
    }

    private func failed(_ id: String, _ message: String) {
        guard id == currentId, player != nil else { return }
        clearPlayer()
        currentId = ""
        notifyListeners("error", data: ["id": id, "message": message])
        scheduleDeactivate()
    }

    private func clearPlayer() {
        if let o = endObserver { NotificationCenter.default.removeObserver(o) }
        if let o = failObserver { NotificationCenter.default.removeObserver(o) }
        endObserver = nil; failObserver = nil
        statusObserver?.invalidate(); statusObserver = nil
        player?.pause(); player = nil
    }

    private func halt() {
        clearPlayer()
        utterance = nil
        if synth.isSpeaking || synth.isPaused { synth.stopSpeaking(at: .immediate) }
    }

    // MARK: Live Activity
    @objc func tour(_ call: CAPPluginCall) {
        guard #available(iOS 16.2, *) else { call.resolve(); return }
        let state = StrolliTourAttributes.ContentState(
            step: call.getString("step") ?? "",
            target: call.getString("target") ?? "",
            distance: call.getString("distance") ?? "",
            eta: call.getString("eta") ?? "",
            maneuver: call.getString("maneuver") ?? "",
            audioTitle: call.getString("audioTitle") ?? "",
            playing: call.getBool("playing") ?? false,
            mode: call.getString("mode") ?? "walk")
        let city = call.getString("city") ?? ""
        DispatchQueue.main.async {
            StrolliActivity.shared.update(city: city, state: state)
            call.resolve()
        }
    }

    @objc func endTour(_ call: CAPPluginCall) {
        if #available(iOS 16.2, *) { DispatchQueue.main.async { StrolliActivity.shared.end() } }
        call.resolve()
    }
}

@available(iOS 16.2, *)
final class StrolliActivity {
    static let shared = StrolliActivity()
    private var activity: Activity<StrolliTourAttributes>?
    private var last: StrolliTourAttributes.ContentState?

    func update(city: String, state: StrolliTourAttributes.ContentState) {
        if let a = activity, a.activityState == .active {
            if state == last { return }
            last = state
            Task { await a.update(ActivityContent(state: state, staleDate: nil)) }
            return
        }
        guard ActivityAuthorizationInfo().areActivitiesEnabled else { print("[Strolli] Live Activities sind in den Einstellungen aus"); return }
        last = state
        // Starten geht nur, solange die App im Vordergrund ist (Tourstart) – sonst bleibt es einfach aus.
        do {
            activity = try Activity.request(attributes: StrolliTourAttributes(city: city),
                                            content: ActivityContent(state: state, staleDate: nil), pushType: nil)
            print("[Strolli] Live Activity gestartet")
        } catch { print("[Strolli] Live Activity konnte nicht starten: \(error)") }
    }

    /// Nur den Audio-Teil ändern (für die Knöpfe, ohne auf die App zu warten)
    func patch(playing: Bool, clearAudio: Bool = false) {
        guard var st = last, let a = activity else { return }
        st.playing = playing
        if clearAudio { st.audioTitle = "" }
        last = st
        Task { await a.update(ActivityContent(state: st, staleDate: nil)) }
    }

    func end() {
        let a = activity
        activity = nil; last = nil
        Task { await a?.end(nil, dismissalPolicy: .immediate) }
    }

    static func endAll() {
        Task { for a in Activity<StrolliTourAttributes>.activities { await a.end(nil, dismissalPolicy: .immediate) } }
    }
}

/// Knöpfe der Live Activity laufen je nach iOS-Version im Prozess der Widget-Erweiterung. Eine Darwin-Benachrichtigung
/// erreicht die App prozessübergreifend (ohne App Group).
func strolliPostDarwin(_ action: String) {
    NSLog("[Strolli] Intent ausgeführt: %@", action)
    CFNotificationCenterPostNotification(CFNotificationCenterGetDarwinNotifyCenter(),
                                         CFNotificationName("com.greimel.strolli.\(action)" as CFString), nil, nil, true)
}

// MARK: - Gemeinsam mit der Widget-Erweiterung (muss dort identisch sein: native/ios-src/widget/StrolliWidgetLiveActivity.swift)

@available(iOS 16.1, *)
struct StrolliTourAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var step: String
        var target: String
        var distance: String
        var eta: String
        var maneuver: String
        var audioTitle: String
        var playing: Bool
        var mode: String
    }
    var city: String
}

@available(iOS 17.0, *)
struct StrolliToggleAudioIntent: LiveActivityIntent {
    static let title: LocalizedStringResource = "Pause oder weiter"
    init() {}
    func perform() async throws -> some IntentResult {
        strolliPostDarwin("toggle")
        return .result()
    }
}

@available(iOS 17.0, *)
struct StrolliSkipIntent: LiveActivityIntent {
    static let title: LocalizedStringResource = "Ansage überspringen"
    init() {}
    func perform() async throws -> some IntentResult {
        strolliPostDarwin("skip")
        return .result()
    }
}
