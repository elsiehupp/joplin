import JoplinStyleSheetNames from './JoplinStyleSheetNames';
import JoplinStyleNumberNames from './JoplinStyleNumberNames';
import StyleProvider from './StyleProvider';
import DefaultTheme from './DefaultTheme';

import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';
import DraculaTheme from './DraculaTheme';
import SolarizedLight from './SolarizedLight';
import SolarizedDark from './SolarizedDark';
import NordTheme from './NordTheme';
import AritimDark from './AritimDark';
import OledDarkTheme from './OledDark';

const Setting = require('lib/models/Setting').default;

export default class StyleContext {

	private styleProvider: StyleProvider;

	public constructor() {
		this.styleProvider = new DefaultTheme();
	}

	public getProperty(styleElementName:string) {
		if (!styleElementName) throw new Error('styleElementName must be specified');

		// const cacheKey:string = [styleElementName, zoomRatio, editorFontSize].join('-');

		if (this.styleProvider.get(JoplinStyleNumberNames.ZoomRatio) == 1 // Setting.value('style.zoom') / 100;
			&& this.styleProvider.get(JoplinStyleNumberNames.BaseFontSize) == Setting.value('style.editor.fontSize')) {
			return this.styleProvider.get(styleElementName);
		} else {
			// this.styleProvider.UpdateZoomRatioFromSettings();
			this.styleProvider.updateBaseFontSizeFromSettings();
			return this.styleProvider.get(styleElementName);
		}

	}

	// cacheKey must be a globally unique key, and must change whenever
	// the dependencies of the style change. If the style depends only
	// on the theme, a static string can be provided as a cache key.
	public buildStyle(electronStyleClass:JoplinStyleSheetNames, props:any) {
		// cacheKey = Array.isArray(cacheKey) ? cacheKey.join('_') : cacheKey;

		// We clear the cache whenever switching themes
		if (this.styleProvider.getThemeID() !== props.themeId) {
			switch (props.themeId) {
			case 1:
				this.styleProvider = new LightTheme();
				break;
			case 2:
				this.styleProvider = new DarkTheme();
				break;
			case 3:
				this.styleProvider = new DraculaTheme();
				break;
			case 4:
				this.styleProvider = new SolarizedLight();
				break;
			case 5:
				this.styleProvider = new SolarizedDark();
				break;
			case 6:
				this.styleProvider = new NordTheme();
				break;
			case 7:
				this.styleProvider = new AritimDark();
				break;
			case 8:
				this.styleProvider = new OledDarkTheme();
				break;
			default:
				throw new Error(`themeId ${props.themeId} is not valid.`);
			}
		}

		return this.styleProvider.getElectronStyleSheet(electronStyleClass, props);

	}





}
