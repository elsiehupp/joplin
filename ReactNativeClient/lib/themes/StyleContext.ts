import { JoplinStyleNumberNames, StyleProvider } from './StyleProvider';
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
	public buildStyleProvider(styleElementName:string, themeId:string, callback:Function) {
		// cacheKey = Array.isArray(cacheKey) ? cacheKey.join('_') : cacheKey;

		// We clear the cache whenever switching themes
		if (this.styleProvider.getThemeID() !== themeId) {
			switch (themeId) {
			case 'light':
				this.styleProvider = new LightTheme();
				break;
			case 'dark':
				this.styleProvider = new DarkTheme();
				break;
			case 'dracula':
				this.styleProvider = new DraculaTheme();
				break;
			case 'solarized-light':
				this.styleProvider = new SolarizedLight();
				break;
			case 'solarized-dark':
				this.styleProvider = new SolarizedDark();
				break;
			case 'nord':
				this.styleProvider = new NordTheme();
				break;
			case 'aritim':
				this.styleProvider = new AritimDark();
				break;
			case 'oled':
				this.styleProvider = new OledDarkTheme();
				break;
			default:
				throw new Error(`themeId ${themeId} is not valid.`);
			}
		}

		if (this.styleProvider.has(styleElementName)) {
			return this.styleProvider.get(styleElementName);
		} else {
			const s = callback(this.getProperty(themeId));

			this.styleProvider.set(styleElementName, s);
			// timestamp: Date.now(),
			return this.styleProvider.get(styleElementName);
		}

	}

}
