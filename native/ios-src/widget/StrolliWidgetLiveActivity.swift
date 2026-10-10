// Strolli – Live Activity: nächster Stopp, Entfernung und Audio-Knöpfe auf dem Sperrbildschirm und in der Dynamic Island.
// Wird von native/scripts/patch-ios.mjs nach ios/App/StrolliWidget/ kopiert.
import ActivityKit
import WidgetKit
import SwiftUI
import AppIntents

/// Knöpfe der Live Activity laufen je nach iOS-Version im Prozess der Widget-Erweiterung. Eine Darwin-Benachrichtigung
/// erreicht die App prozessübergreifend (ohne App Group).
func strolliPostDarwin(_ action: String) {
    NSLog("[Strolli] Intent ausgeführt: %@", action)
    CFNotificationCenterPostNotification(CFNotificationCenterGetDarwinNotifyCenter(),
                                         CFNotificationName("com.greimel.strolli.\(action)" as CFString), nil, nil, true)
}

// MARK: - Gemeinsam mit der App (muss identisch sein mit native/ios-src/StrolliNative.swift)

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

struct StrolliToggleAudioIntent: LiveActivityIntent {
    static let title: LocalizedStringResource = "Pause oder weiter"
    init() {}
    func perform() async throws -> some IntentResult {
        strolliPostDarwin("toggle")
        return .result()
    }
}

struct StrolliSkipIntent: LiveActivityIntent {
    static let title: LocalizedStringResource = "Ansage überspringen"
    init() {}
    func perform() async throws -> some IntentResult {
        strolliPostDarwin("skip")
        return .result()
    }
}

// MARK: - Aussehen

private let strolliPine = Color(red: 0.11, green: 0.25, blue: 0.20)
private let strolliRed = Color(red: 0.86, green: 0.33, blue: 0.27)
private let strolliCream = Color(red: 0.96, green: 0.94, blue: 0.90)

private func modeIcon(_ s: StrolliTourAttributes.ContentState) -> String {
    s.mode == "bike" ? "bicycle" : "figure.walk"
}

struct StrolliAudioControls: View {
    let s: StrolliTourAttributes.ContentState
    var body: some View {
        HStack(spacing: 10) {
            Image(systemName: s.playing ? "waveform" : "headphones")
                .font(.subheadline.weight(.semibold))
                .foregroundStyle(strolliRed)
            Text(s.audioTitle.isEmpty ? "Strolli erzählt, sobald es etwas zu sehen gibt" : s.audioTitle)
                .font(.subheadline.weight(s.audioTitle.isEmpty ? .regular : .semibold))
                .foregroundStyle(strolliCream.opacity(s.audioTitle.isEmpty ? 0.7 : 1))
                .lineLimit(2)
                .minimumScaleFactor(0.85)
                .fixedSize(horizontal: false, vertical: true)
            Spacer(minLength: 4)
            if !s.audioTitle.isEmpty {
                Button(intent: StrolliToggleAudioIntent()) {
                    Image(systemName: s.playing ? "pause.fill" : "play.fill")
                        .font(.body.weight(.bold))
                        .frame(width: 38, height: 38)
                        .background(Circle().fill(strolliCream.opacity(0.18)))
                }
                .buttonStyle(.plain)
                .foregroundStyle(strolliCream)
                Button(intent: StrolliSkipIntent()) {
                    Image(systemName: "forward.end.fill")
                        .font(.body.weight(.bold))
                        .frame(width: 38, height: 38)
                        .background(Circle().fill(strolliCream.opacity(0.18)))
                }
                .buttonStyle(.plain)
                .foregroundStyle(strolliCream)
            }
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 8)
        .background(RoundedRectangle(cornerRadius: 16, style: .continuous).fill(strolliCream.opacity(0.10)))
    }
}

struct StrolliLockScreenView: View {
    let city: String
    let s: StrolliTourAttributes.ContentState
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                Label(s.step, systemImage: modeIcon(s))
                    .font(.caption.weight(.semibold))
                    .foregroundStyle(strolliCream.opacity(0.75))
                Spacer()
                Text("Strolli · \(city)")
                    .font(.caption2.weight(.medium))
                    .foregroundStyle(strolliCream.opacity(0.55))
            }
            HStack(alignment: .center, spacing: 12) {
                VStack(alignment: .leading, spacing: 2) {
                    Text(s.target)
                        .font(.title3.weight(.bold))
                        .foregroundStyle(strolliCream)
                        .lineLimit(2)
                        .minimumScaleFactor(0.8)
                    if !s.maneuver.isEmpty {
                        Text(s.maneuver)
                            .font(.subheadline)
                            .foregroundStyle(strolliCream.opacity(0.8))
                            .lineLimit(1)
                            .minimumScaleFactor(0.8)
                    }
                }
                Spacer(minLength: 8)
                VStack(alignment: .trailing, spacing: 2) {
                    Text(s.distance)
                        .font(.title3.weight(.bold))
                        .monospacedDigit()
                        .foregroundStyle(strolliCream)
                    Text(s.eta)
                        .font(.caption)
                        .foregroundStyle(strolliCream.opacity(0.7))
                }
            }
            StrolliAudioControls(s: s)
        }
        .padding(16)
    }
}

struct StrolliWidgetLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: StrolliTourAttributes.self) { context in
            StrolliLockScreenView(city: context.attributes.city, s: context.state)
                .activityBackgroundTint(strolliPine)
                .activitySystemActionForegroundColor(strolliCream)
        } dynamicIsland: { context in
            DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    Label(context.state.step, systemImage: modeIcon(context.state))
                        .font(.caption.weight(.semibold))
                        .foregroundStyle(.secondary)
                        .lineLimit(1)
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text(context.state.distance)
                        .font(.headline)
                        .monospacedDigit()
                }
                DynamicIslandExpandedRegion(.center) {
                    Text(context.state.target)
                        .font(.headline)
                        .lineLimit(1)
                        .minimumScaleFactor(0.7)
                }
                DynamicIslandExpandedRegion(.bottom) {
                    StrolliAudioControls(s: context.state)
                }
            } compactLeading: {
                Image(systemName: modeIcon(context.state))
                    .foregroundStyle(strolliRed)
            } compactTrailing: {
                Text(context.state.distance)
                    .font(.caption.weight(.semibold))
                    .monospacedDigit()
            } minimal: {
                Image(systemName: modeIcon(context.state))
                    .foregroundStyle(strolliRed)
            }
            .keylineTint(strolliRed)
        }
    }
}
