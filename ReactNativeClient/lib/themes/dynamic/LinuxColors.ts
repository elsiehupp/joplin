import { Theme, ThemeAppearance } from '../type';

// The fallback values in this theme
// come from the default dark theme in Joplin
// because that's what I plan on using for debugging.

function getColor(color: string):string {
	try {
		// Something Something GTK?
		// https://stackoverflow.com/a/56415144
		return (color);
	} catch {
		return 'fuschia';
	}
}

export const linuxColors:Theme = {
	appearance: ThemeAppearance.Dark,

	// backgroundColor is used for ???.
	// It is by default midnight blue.
	backgroundColor:
		getColor(''),

	// backgroundColorTransparent is used for ???.
	// It is by default translucent white.
	backgroundColorTransparent:
		getColor(''),

	// oddBackgroundColor is used for ???.
	// It is by default light gray.
	oddBackgroundColor:
		getColor(''),

	// color is used for most text.
	// It is by default light gray.
	color:
		getColor(''),

	// colorError is used for ???.
	// It is by default red.
	colorError:
		getColor(''),

	// colorWarn is used for ???.
	// It is by default dark orange.
	colorWarn:
		getColor(''),

	// colorFaded is used for less important text.
	// It is by default medium gray.
	colorFaded:
		getColor(''),

	// colorBright is used for important text.
	// It is by default white.
	colorBright:
		getColor(''),

	// divider color is used for ???.
	// It is by default dark gray.
	dividerColor:
		getColor(''),

	// selectedColor is used for ???.
	// It is by default medium gray.
	selectedColor:
		getColor(''),

	// urlColor is used for URLs.
	// It is by default lavender.
	urlColor:
		getColor(''),

	// backgroundColor2 is used for the sidebar.
	// It is by default midnight blue.
	backgroundColor2:
		getColor(''),

	// color2 is used for sidebar text.
	// It is by default white.
	color2:
		getColor(''),

	// selectedColor2 is used for sidebar selections.
	// It is by default navy blue.
	selectedColor2:
		getColor(''),

	// colorError2 is used for ???.
	// It is by default salmon or coral.
	colorError2:
		getColor(''),

	// backgroundColor3 is used for config screens
	// It is by default dark blue
	backgroundColor3:
		getColor(''),

	// backgroundColorHover3 is used for config screens.
	// It is by default dark gray.
	backgroundColorHover3:
		getColor(''),

	// color3 is used for config screens.
	// It is by default light gray.
	color3:
		getColor(''),

	// backgroundColor4 is used for secondary-style buttons.
	// It is by default midnight blue.
	backgroundColor4:
		getColor(''),

	// color4 is the foreground for secondary-style buttons.
	// It is by default light blue.
	color4:
		getColor(''),

	// raisedBackgroundColor is used for ???.
	// It is by default medium gray.
	raisedBackgroundColor:
		getColor(''),

	// raisedColor is used for ???.
	// It is by default white.
	raisedColor:
		getColor(''),

	// searchMarkerBackgroundColor is used for ???.
	// It is by default yellow.
	searchMarkerBackgroundColor:
		getColor(''),

	// searchMarkerColor is used for ???.
	// It is by default black.
	searchMarkerColor:
		getColor(''),

	// warningBackgroundColor is used for ???.
	// It is by default orange.
	warningBackgroundColor:
		getColor(''),

	// tableBackgroundColor is used for ???.
	// It is by default midnight blue.
	tableBackgroundColor:
		getColor(''),

	// codeBackgroundColor is used for ???.
	// It is by default midnight blue.
	codeBackgroundColor:
		getColor(''),

	// codeBorderColor is used for ???.
	// It is by default dark gray.
	codeBorderColor:
		getColor(''),

	// codeColor is used for ???.
	// It is by default white.
	codeColor:
		getColor(''),

	codeMirrorTheme: 'dynamic-linux',
	codeThemeCss: 'dynamic-linux.css',

};