// import { TextStyle } from "./TextStyle";
// import { BoxStyle } from "./BoxStyle";
// import CSS = require('css');
// import CssClass from './TextStyle';
import Collections = require('typescript-collections');
// import './JoplinStyleColorNames';

const Setting = require('lib/models/Setting').default;

export enum StyleColorAppearance {
	Light = 'light',
	Dark = 'dark',
}

export enum JoplinStyleStringNames {
	BackgroundColor1 = 'backgroundColor',
	BackgroundColor2 = 'backgroundColor2',
	BackgroundColor3 = 'backgroundColor3',
	BgColor4 = 'bgColor4',
	BackgroundColor4 = 'backgroundColor4',
	BackgroundColor5 = 'backgroundColor5',
	BackgroundColorActive1 = 'backgroundColorActive1',
	BackgroundColorActive2 = 'backgroundColorActive2',
	BackgroundColorActive3 = 'backgroundColorActive3',
	BackgroundColorActive4 = 'backgroundColorActive4',
	BackgroundColorActive5 = 'backgroundColorActive5',
	BackgroundColorHover1 = 'backgroundColorHover1',
	BackgroundColorHover2 = 'backgroundColorHover2',
	BackgroundColorHover3 = 'backgroundColorHover3',
	BackgroundColorHover4 = 'backgroundColorHover4',
	BackgroundColorHover5 = 'backgroundColorHover5',
	BackgroundColorHoverDim3 = 'backgroundColorHoverDim3',
	BackgroundColorTransparent = 'backgroundColorTransparent',
	CodeBackgroundColor = 'codeBackgroundColor',
	HoverBackground = 'backgroundHover',
	OddBackgroundColor = 'oddBackgroundColor',
	RaisedBackgroundColor = 'raisedBackgroundColor',
	TableBackgroundColor = 'tableBackgroundColor',
	SearchMarkerBackgroundColor = 'searchMarkerBackgroundColor',
	WarningBackgroundColor = 'warningBackgroundColor',

	BorderColor1 = 'borderColor1',
	BorderColor2 = 'borderColor2',
	BorderColor3 = 'borderColor3',
	BorderColor4 = 'borderColor4',
	CodeBorderColor = 'codeBorderColor',

	DividerColor = 'dividerColor',
	SelectedDividerColor = 'selectedDividerColor',

	IconColor = 'iconColor',

	ActiveTextColor2 = 'colorActive2',
	BrightTextColor = 'colorBright',
	CodeTextColor = 'codeColor',
	ErrorTextColor1 = 'colorError',
	ErrorTextColor2 = 'colorError2',
	FadedTextColor1 = 'colorFaded',
	FadedTextColor2 = 'colorFaded2',
	HighlightedTextColor = 'highlightedColor',
	HoverTextColor1 = 'colorHover',
	HoverTextColor2 = 'colorHover2',
	MainTextColor1 = 'color',
	MainTextColor2 = 'color2',
	MainTextColor3 = 'color3',
	MainTextColor4 = 'color4',
	MainTextColor5 = 'color5',
	SearchMarkerTextColor = 'searchMarkerColor',
	SelectedTextColor1 = 'selectedColor',
	SelectedTextColor2 = 'selectedColor2',
	UrlTextColor = 'urlColor',
	WarningTextColor = 'colorWarn',
	RaisedTextColor = 'raisedColor',

	GlobalFontFamily = 'globalFontFamily',
	GlobalLineHeight = 'globalLineHeight',
	GlobalAppearance = 'globalAppearance',
}

export enum JoplinStyleNumberNames {
	BaseFontSize = 'baseFontSize',
	ZoomRatio = 'zoomRatio',

	GlobalMargin = 'globalStyle.margin',
	GlobalItemMarginTop = 'globalStyle.itemMarginTop',
	GlobalItemMarginBottom = 'globalStyle.itemMarginBottom',
	GlobalDisabledOpacity = 'globalStyle.disabledOpacity',
	GlobalButtonMinWidth = 'globalStyle.buttonMinWidth',
	GlobalButtonMinHeight = 'globalStyle.buttonMinHeight',
	GlobalEditorFontSize = 'globalStyle.editorFontSize',
	GlobalTextAreaLineHeight = 'globalStyle.textAreaLineHeight',
	GlobalHeaderButtonHPadding = 'globalStyle.headerButtonHPadding',
	GlobalToolbarHeight = 'globalStyle.toolbarHeight',
	GlobalToolbarPadding = 'globalStyle.toolbarPadding',
	GlobalMainPadding = 'globalStyle.mainPadding',
	GlobalTopRowHeight = 'globalStyle.topRowHeight',

	ConfigScreenPadding = 'configScreenPadding',
	MainPadding = 'mainPadding',
	FontSize = 'fontSize',
	ToolbarHeight = 'toolbarHeight',
	HeaderButtonHPadding = 'headerButtonHPadding',

}

export enum JoplinStyleClassNames {
	Icon = 'icon',
	LineInput = 'lineInput',
	HeaderStyle = 'headerStyle',
	InputStyle = 'inputStyle',
	ContainerStyle = 'containerStyle',
	ButtonStyle = 'buttonStyle',
	TagStyle = 'tagStyle',
	ToolbarStyle = 'toolbarStyle',

	NoteEditor = 'noteEditor',

	TextStyle = 'textStyle',
	ClickableTextStyle = 'clickableTextStyle',
	TextStyle2 = 'textStyle2',
	TextStyleMinor = 'textStyleMinor',
	UrlStyle = 'urlStyle',
	H1Style = 'h1Style',
	H2Style = 'h2Style',
	DialogModalLayer = 'dialogModalLayer',
	ControlBox = 'controlBox',
	ControlBoxLabel = 'controlBoxLabel',
	ControlBoxValue = 'controlBoxValue',
	DialogBox = 'dialogBox',
	ButtonIconStyle = 'buttonIconStyle',
	NotificationBox = 'notificationBox',
	DialogTitle = 'dialogTitle',
	DropdownList = 'dropdownList',

	GlobalBaseStyle = 'globalStyle',
	GlobalButtonStyle = 'globalStyle.buttonStyle',
	GlobalContainerStyle = 'globalStyle.containerStyle',
	GlobalIconStyle = 'globalStyle.icon',
	GlobalHeaderStyle = 'globalStyle.headerStyle',
	GlobalInputStyle = 'globalStyle.inputStyle',
	GlobalLineInput = 'globalStyle.lineInput,'
}

export abstract class StyleProvider {
	protected themeID: string;
	protected codeThemeCss: string;
	protected appearance: StyleColorAppearance;
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

		this.themeID = '';
		this.codeThemeCss = '';
		this.appearance = StyleColorAppearance.Light;
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
		// if (this.styleCache.containsKey(styleElementName)) {
		return this.styleCache.getValue(styleElementName) != null;
		// } else {
		// 	throw new Error(`styleElementName '${styleElementName}' does not exist in styleCache.`);
		// }
	}

	public get(styleElementName:string): any {
		if (this.styleCache.containsKey(styleElementName)) {
			return this.styleCache.getValue(styleElementName);
		} else {
			return {};
			// throw new Error(`styleElementName '${styleElementName}' does not exist in styleCache.`);
		}
	}

	public set(styleElementName:string, style:any): void {
		this.styleCache.setValue(styleElementName, style);
		return;
		// if (this.styleCache.containsKey(styleElementName)) {
		// 	this.styleCache.setValue(styleElementName, style);
		// 	return;
		// } else {
		// 	throw new Error(`styleElementName '${styleElementName}' does not exist in styleCache.`);
		// }
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
