import JoplinStyleClassNames from './JoplinStyleClassNames';
import JoplinStyleColorAppearance from './JoplinStyleColorAppearance';
import JoplinStyleNumberNames from './JoplinStyleNumberNames';
import JoplinStyleSheetNames from './JoplinStyleSheetNames';
import JoplinStyleStringNames from './JoplinStyleStringNames';

import Collections = require('typescript-collections');

const Setting = require('lib/models/Setting').default;

export default abstract class StyleProvider {
	protected themeID: string;
	protected codeThemeCss: string;
	protected appearance: JoplinStyleColorAppearance;
	protected fontFamily: string;
	protected fontSizes: Object;

	private styleCache: Collections.Dictionary<any, any>;

	public constructor() {
		this.styleCache = new Collections.Dictionary<any, any>();
		for (const item in JoplinStyleStringNames) {
			this.set(item, null);
		}
		for (const item in JoplinStyleNumberNames) {
			this.set(item, null);
		}
		for (const item in JoplinStyleClassNames) {
			this.set(item, {});
		}
		for (const item in JoplinStyleSheetNames) {
			this.set(item, {});
		}

		this.themeID = '';
		this.codeThemeCss = '';
		this.appearance = JoplinStyleColorAppearance.Light;
		this.fontFamily = '';
		this.fontSizes = {};

		return this;
	}

	public UpdateZoomRatioFromSettings(): void {
		this.set(JoplinStyleNumberNames.ZoomRatio, Setting.value('style.zoom') / 100);
	}

	public updateBaseFontSizeFromSettings(): void {
		this.set(JoplinStyleNumberNames.BaseFontSize, Setting.value('style.editor.fontSize'));
	}

	public has(styleElementName:string): boolean {
		return this.styleCache.getValue(styleElementName) != null;
	}

	public get(styleElementName:string): any {
		if (this.styleCache.containsKey(styleElementName)) {
			return this.styleCache.getValue(styleElementName);
		} else {
			return {};
		}
	}

	public abstract getElectronStyleSheet(styleSheetName:JoplinStyleSheetNames, props:any):any;

	public set(styleElementName:string, style:any): void {
		this.styleCache.setValue(styleElementName, style);
		return;
	}

	public getThemeID() {
		return this.themeID;
	}

	public getCodeThemeCss() {
		return this.codeThemeCss;
	}

	public getAppearance() {
		return this.appearance;
	}

	public getFontFamily() {
		return this.fontFamily;
	}

	public getFontSizes() {
		return this.fontSizes;
	}

}
