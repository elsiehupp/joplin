import { Theme, ThemeAppearance } from './type';
import { Platform } from 'react-native';

var dark = require('./dark');
import { androidColors } from './dynamic/AndroidColors';
import { iOSColors } from './dynamic/iOSColors';
import { linuxColors } from './dynamic/LinuxColors';
import { macOSColors } from './dynamic/MacOSColors';
import { windowsColors } from './dynamic/WindowsColors';

// The fallback values in this theme
// come from the default dark theme in Joplin
// because that's what I plan on using for debugging.

function getColor(color: string):string {
	var colorValue = color;
	var platform = process.platform;

	switch (platform) {
	case 'darwin':
		colorValue = macOSColors.color;
		break;
	case 'win32':
		colorValue = windowsColors.color;
		break;
	case 'linux':
		colorValue = linuxColors.color;
		break;
    default:
		Platform.select({
			ios: {
				colorValue: iOSColors.color,
			},
			android: {
				colorValue: androidColors.color,
			},
			default: {
				colorValue: dark.color,
			},
		});
		break;
	}
	return colorValue;
}



const theme:Theme = {
	appearance: ThemeAppearance.Dark,

	// It would be nice to be able to iterate through
	// the properties of type.ts,
	// but apparently this isn't immediately possible:
	// https://stackoverflow.com/questions/45670705/typescript-iterate-interface-properties

	backgroundColor:
		getColor('backgroundColor'),
	backgroundColorTransparent:
		getColor('backgroundColorTransparent'),
	oddBackgroundColor:
		getColor('oddBackgroundColor'),
	color:
		getColor('color'),
	colorError:
		getColor('colorError'),
	colorWarn:
		getColor('colorWarn'),
	colorFaded:
		getColor('colorFaded'),
	colorBright:
		getColor('colorBright'),
	dividerColor:
		getColor('dividerColor'),
	selectedColor:
		getColor('selectedColor'),
	urlColor:
		getColor('urlColor'),

	backgroundColor2:
		getColor('backgroundColor2'),
	color2:
		getColor('color2'),
	selectedColor2:
		getColor('selectedColor2'),
	colorError2:
		getColor('colorError2'),

	backgroundColor3:
		getColor('backgroundColor3'),
	backgroundColorHover3:
		getColor('backgroundColorHover3'),
	color3:
		getColor('color3'),

	backgroundColor4:
		getColor('backgroundColor4'),
	color4:
		getColor('color4'),

	raisedBackgroundColor:
		getColor('raisedBackgroundColor'),
	raisedColor:
		getColor('raisedColor'),
	searchMarkerBackgroundColor:
		getColor('searchMarkerBackgroundColor'),
	searchMarkerColor:
		getColor('searchMarkerColor'),

	warningBackgroundColor:
		getColor('warningBackgroundColor'),

	tableBackgroundColor:
		getColor('tableBackgroundColor'),
	codeBackgroundColor:
		getColor('codeBackgroundColor'),
	codeBorderColor:
		getColor('codeBorderColor'),
	codeColor:
		getColor('codeColor'),

	codeMirrorTheme: 'dynamic',
	codeThemeCss: 'dynamic.css',
};

export default theme;
