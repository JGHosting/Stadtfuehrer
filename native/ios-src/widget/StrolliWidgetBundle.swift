// Strolli – Widget-Erweiterung: nur die Live Activity (Sperrbildschirm + Dynamic Island).
// Wird von native/scripts/patch-ios.mjs nach ios/App/StrolliWidget/ kopiert.
import WidgetKit
import SwiftUI

@main
struct StrolliWidgetBundle: WidgetBundle {
    var body: some Widget {
        StrolliWidgetLiveActivity()
    }
}
