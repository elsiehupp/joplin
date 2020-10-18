"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const react_native_1 = require("react-native");
// The fallback values in this theme
// come from the default dark theme in Joplin
// because that's what I plan on using for debugging.
const colorNames = {
    // Android and iOS use React Native PlatformColor:
    // https://reactnative.dev/docs/platformcolor
    // Android React Native color names taken from:
    // https://developer.android.com/reference/android/R.attr
    // https://developer.android.com/reference/android/R.color
    // iOS React Native color names taken from:
    // https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors
    // Linux uses GTK:
    // https://stackoverflow.com/a/56415144
    // 
    // macOS and Windows use Electron systemPrefences:
    // https://www.electronjs.org/docs/api/system-preferences#systempreferencesgetaccentcolor-windows-macos
    // https://www.electronjs.org/docs/api/system-preferences#systempreferencesgetcolorcolor-windows-macos
    // https://www.electronjs.org/docs/api/system-preferences#systempreferencesgetsystemcolorcolor-macos
    // backgroundColor is used for ???.
    // It is by default midnight blue.
    backgroundColor: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#1D2024",
    },
    // backgroundColorTransparent is used for ???.
    // It is by default translucent white.
    backgroundColorTransparent: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "rgba(255,255,255,0.9)",
    },
    // oddBackgroundColor is used for ???.
    // It is by default light gray.
    oddBackgroundColor: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#dddddd",
    },
    // color is used for most text.
    // It is by default light gray.
    color: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#dddddd",
    },
    // colorError is used for ???.
    // It is by default red.
    colorError: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "red",
    },
    // colorWarn is used for ???.
    // It is by default dark orange.
    colorWarn: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#9A5B00",
    },
    // colorFaded is used for less important text.
    // It is by default medium gray.
    colorFaded: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#999999",
    },
    // colorBright is used for important text.
    // It is by default white.
    colorBright: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#ffffff",
    },
    // divider color is used for ???.
    // It is by default dark gray.
    dividerColor: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#555555",
    },
    // selectedColor is used for ???.
    // It is by default medium gray.
    selectedColor: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#616161",
    },
    // urlColor is used for URLs.
    // It is by default lavender.
    urlColor: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "rgb(166,166,255)",
    },
    // backgroundColor2 is used for the sidebar.
    // It is by default midnight blue.
    backgroundColor2: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "",
    },
    // color2 is used for sidebar text.
    // It is by default white.
    color2: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "",
    },
    // selectedColor2 is used for sidebar selections.
    // It is by default navy blue.
    selectedColor2: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#013F74",
    },
    // colorError2 is used for ???.
    // It is by default salmon or coral.
    colorError2: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#ff6c6c",
    },
    // backgroundColor3 is used for config screens
    // It is by default dark blue
    backgroundColor3: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#2E3138",
    },
    // backgroundColorHover3 is used for config screens.
    // It is by default dark gray.
    backgroundColorHover3: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#4E4E4E",
    },
    // color3 is used for config screens.
    // It is by default light gray.
    color3: {
        android: "",
        ios: "",
        linux: "",
        macos: "",
        windows: "",
        fallbackHex: "#dddddd",
    },
    // backgroundColor4 is used for secondary-style buttons.
    // It is by default midnight blue.
    backgroundColor4: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "#1D2024",
    },
    // color4 is the foreground for secondary-style buttons.
    // It is by default light blue.
    color4: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "#789FE9",
    },
    // raisedBackgroundColor is used for ???.
    // It is by default medium gray.
    raisedBackgroundColor: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "#474747",
    },
    // raisedColor is used for ???.
    // It is by default white.
    raisedColor: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "#ffffff",
    },
    // searchMarkerBackgroundColor is used for ???.
    // It is by default yellow.
    searchMarkerBackgroundColor: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "#F7D26E",
    },
    // searchMarkerColor is used for ???.
    // It is by default black.
    searchMarkerColor: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "black",
    },
    // warningBackgroundColor is used for ???.
    // It is by default orange.
    warningBackgroundColor: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "#CC6600",
    },
    // tableBackgroundColor is used for ???.
    // It is by default midnight blue.
    tableBackgroundColor: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "rgb(40, 41, 42)",
    },
    // codeBackgroundColor is used for ???.
    // It is by default midnight blue.
    codeBackgroundColor: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "rgb(47, 48, 49)",
    },
    // codeBorderColor is used for ???.
    // It is by default dark gray.
    codeBorderColor: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "rgb(70, 70, 70)",
    },
    // codeColor is used for ???.
    // It is by default white.
    codeColor: {
        android: "",
        ios: "",
        linuxDark: "",
        linuxLight: "",
        macos: "",
        windows: "",
        fallbackHex: "#ffffff",
    },
};
function getColor(color) {
    var colorValue;
    var platform;
    platform = process.platform;
    switch (platform) {
        case 'darwin':
            var systemPreferences = require('electron');
            colorValue: systemPreferences.getColor(colorNames.color.macos);
            break;
        case 'win32':
            var systemPreferences = require('electron');
            colorValue: systemPreferences.getColor(colorNames.color.windows);
            break;
        case 'linux':
            // Something something
            // https://stackoverflow.com/a/56415144
            break;
        default:
            react_native_1.Platform.select({
                ios: {
                    colorValue: react_native_1.PlatformColor(colorNames.color.ios)
                },
                android: {
                    colorValue: react_native_1.PlatformColor(colorNames.color.android)
                },
                default: {
                    colorValue: colorNames.color.fallbackHex
                }
            });
            break;
    }
    return colorValue;
}
const theme = {
    appearance: type_1.ThemeAppearance.Dark,
    // It would be nice to be able to iterate through
    // the properties of type.ts,
    // but apparently this isn't immediately possible:
    // https://stackoverflow.com/questions/45670705/typescript-iterate-interface-properties
    backgroundColor: getColor("backgroundColor"),
    backgroundColorTransparent: getColor("backgroundColorTransparent"),
    oddBackgroundColor: getColor("oddBackgroundColor"),
    color: getColor("color"),
    colorError: getColor("colorError"),
    colorWarn: getColor("colorWarn"),
    colorFaded: getColor("colorFaded"),
    colorBright: getColor("colorBright"),
    dividerColor: getColor("dividerColor"),
    selectedColor: getColor("selectedColor"),
    urlColor: getColor("urlColor"),
    backgroundColor2: getColor("backgroundColor2"),
    color2: getColor("color2"),
    selectedColor2: getColor("selectedColor2"),
    colorError2: getColor("colorError2"),
    backgroundColor3: getColor("backgroundColor3"),
    backgroundColorHover3: getColor("backgroundColorHover3"),
    color3: getColor("color3"),
    backgroundColor4: getColor("backgroundColor4"),
    color4: getColor("color4"),
    raisedBackgroundColor: getColor("raisedBackgroundColor"),
    raisedColor: getColor("raisedColor"),
    searchMarkerBackgroundColor: getColor("searchMarkerBackgroundColor"),
    searchMarkerColor: getColor("searchMarkerColor"),
    warningBackgroundColor: getColor("warningBackgroundColor"),
    tableBackgroundColor: getColor("tableBackgroundColor"),
    codeBackgroundColor: getColor("codeBackgroundColor"),
    codeBorderColor: getColor("codeBorderColor"),
    codeColor: getColor("codeColor"),
    codeMirrorTheme: 'dynamic',
    codeThemeCss: 'dynamic.css',
};
exports.default = theme;
//# sourceMappingURL=dynamic.js.map