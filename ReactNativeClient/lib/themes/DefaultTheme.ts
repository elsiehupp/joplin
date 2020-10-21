// import { CssStyle } from "./TextStyle";
// import { BoxStyle } from "./BoxStyle";
import { JoplinStyleStringNames, JoplinStyleClassNames, JoplinStyleNumberNames, StyleProvider } from './StyleProvider';

const Setting = require('lib/models/Setting').default;

// import LightTheme from './LightTheme';
// import DarkTheme from './DarkTheme';
// import DraculaTheme from './DraculaTheme';
// import SolarizedLight from './SolarizedLight';
// import SolarizedDark from './SolarizedDark';
// import NordTheme from './NordTheme';
// import AritimDark from './AritimDark';
// import OledDarkTheme from './OledDark';



// const joplinDefaultThemeNames = {
// 	[Setting.THEME_LIGHT]: 'light',
// 	[Setting.THEME_DARK]: 'dark',
// 	[Setting.THEME_DRACULA]: 'dracula',
// 	[Setting.THEME_SOLARIZED_LIGHT]: 'solarized-light',
// 	[Setting.THEME_SOLARIZED_DARK]: 'solarized-dark',
// 	[Setting.THEME_NORD]: 'nord',
// 	[Setting.THEME_ARITIM_DARK]: 'aritim',
// 	[Setting.THEME_OLED_DARK]: 'oled',
// };


const Color = require('color');

export default class DefaultTheme extends StyleProvider {
	public constructor() {
		super();
		// this.themeID = themeID;

		this.InitializeGlobalStyles();
		this.InitializeOtherStyles();

		return this;
	}

	public updateZoomRatioFromSettings(): void {
		this.set(JoplinStyleNumberNames.ZoomRatio, Setting.value('style.zoom') / 100);

		const fontSizeZoomRatioMultiplier:number = 12;
		const textAreaLineHeightMultiplier:number = 1 / 12;
		const toolbarIconSizeZoomRatioMultiplier:number = 16;
		const noteViewerFontSizeZoomRatioMultiplier:number = 15;
		// Font size are not theme specific, but they must be referenced
		// and computed here to allow them to respond to settings changes
		// without the need to restart
		this.fontSizes = {
			fontSize: Math.round(fontSizeZoomRatioMultiplier * this.get(JoplinStyleNumberNames.ZoomRatio)),
			toolbarIconSize: toolbarIconSizeZoomRatioMultiplier,
			editorFontSize: this.get(JoplinStyleNumberNames.BaseFontSize),
			textAreaLineHeight: Math.round(this.get(JoplinStyleNumberNames.GlobalTextAreaLineHeight) * this.get(JoplinStyleNumberNames.BaseFontSize) / textAreaLineHeightMultiplier),
			noteViewerFontSize: Math.round(noteViewerFontSizeZoomRatioMultiplier * this.get(JoplinStyleNumberNames.ZoomRatio)),
		};

	}

	public updateBaseFontSizeFromSettings(): void {
		this.set(JoplinStyleNumberNames.BaseFontSize, Setting.value('style.editor.fontSize'));

		const fontSizeZoomRatioMultiplier:number = 12;
		const textAreaLineHeightMultiplier:number = 1 / 12;
		const toolbarIconSizeZoomRatioMultiplier:number = 16;
		const noteViewerFontSizeZoomRatioMultiplier:number = 15;

		// Font size are not theme specific, but they must be referenced
		// and computed here to allow them to respond to settings changes
		// without the need to restart
		this.fontSizes = {
			fontSize: Math.round(fontSizeZoomRatioMultiplier * this.get(JoplinStyleNumberNames.ZoomRatio)),
			toolbarIconSize: toolbarIconSizeZoomRatioMultiplier,
			editorFontSize: this.get(JoplinStyleNumberNames.BaseFontSize),
			textAreaLineHeight: Math.round(this.get(JoplinStyleNumberNames.GlobalTextAreaLineHeight) * this.get(JoplinStyleNumberNames.BaseFontSize) / textAreaLineHeightMultiplier),
			noteViewerFontSize: Math.round(noteViewerFontSizeZoomRatioMultiplier * this.get(JoplinStyleNumberNames.ZoomRatio)),
		};
	}


	private InitializeOtherStyles() {	// globalStyle should be used for properties that do not change across themes
		// i.e. should not be used for colors

		this.set(JoplinStyleStringNames.GlobalFontFamily, 'Roboto');// 'sans-serif',
		this.set(JoplinStyleStringNames.GlobalLineHeight, '1.6em');
		this.set(JoplinStyleStringNames.GlobalAppearance, 'light');

		this.set(JoplinStyleNumberNames.GlobalMargin, 15); // No text and no interactive component should be within this margin
		this.set(JoplinStyleNumberNames.GlobalItemMarginTop, 10);
		this.set(JoplinStyleNumberNames.GlobalItemMarginBottom, 10);
		this.set(JoplinStyleNumberNames.GlobalDisabledOpacity, 0.3);
		this.set(JoplinStyleNumberNames.GlobalButtonMinWidth, 50);
		this.set(JoplinStyleNumberNames.GlobalButtonMinHeight, 30);
		this.set(JoplinStyleNumberNames.GlobalEditorFontSize, 12);
		this.set(JoplinStyleNumberNames.GlobalTextAreaLineHeight, 17);
		this.set(JoplinStyleNumberNames.GlobalHeaderButtonHPadding, 6);
		this.set(JoplinStyleNumberNames.GlobalToolbarHeight, 26);
		this.set(JoplinStyleNumberNames.GlobalToolbarPadding, 6);
		this.set(JoplinStyleNumberNames.GlobalMainPadding, 12);
		this.set(JoplinStyleNumberNames.GlobalTopRowHeight, 50);


		this.set(JoplinStyleStringNames.SelectedDividerColor, Color(this.get(JoplinStyleStringNames.DividerColor)).darken(0.2).hex());
		this.set(JoplinStyleStringNames.IconColor, Color(this.get(JoplinStyleStringNames.MainTextColor1).alpha(0.8)));

		this.set(JoplinStyleStringNames.FadedTextColor2, Color(this.get(JoplinStyleStringNames.MainTextColor2)).alpha(0.5).rgb());
		this.set(JoplinStyleStringNames.HoverTextColor2, Color(this.get(JoplinStyleStringNames.MainTextColor2)).alpha(0.7).rgb());
		this.set(JoplinStyleStringNames.ActiveTextColor2, Color(this.get(JoplinStyleStringNames.MainTextColor2)).alpha(0.9).rgb());

		this.set(JoplinStyleStringNames.BackgroundColorHoverDim3, Color(this.get(JoplinStyleStringNames.BackgroundColorHover3)).alpha(0.3).rgb());
		this.set(JoplinStyleStringNames.BackgroundColorActive3, Color(this.get(JoplinStyleStringNames.BackgroundColorHover3)).alpha(0.5).rgb());

		this.set(JoplinStyleStringNames.BgColor4, this.get(JoplinStyleStringNames.BackgroundColor4));

		this.set(JoplinStyleStringNames.BackgroundColorHover2, Color(this.get(JoplinStyleStringNames.SelectedTextColor2)).alpha(0.4).rgb());

		this.set(JoplinStyleStringNames.BackgroundColorHover4, Color(this.get(JoplinStyleStringNames.BackgroundColorHover3)).alpha(0.3).rgb());
		this.set(JoplinStyleStringNames.BackgroundColorActive4, Color(this.get(JoplinStyleStringNames.BackgroundColorHover3)).alpha(0.8).rgb());
		this.set(JoplinStyleStringNames.BorderColor4, Color(this.get(JoplinStyleStringNames.MainTextColor1)).alpha(0.3));
		this.set(JoplinStyleStringNames.BackgroundColor4, this.get(JoplinStyleStringNames.BgColor4));

		this.set(JoplinStyleStringNames.MainTextColor5, this.get(JoplinStyleStringNames.BgColor4));
		this.set(JoplinStyleStringNames.BackgroundColor5, this.get(JoplinStyleStringNames.MainTextColor4));
		this.set(JoplinStyleStringNames.BackgroundColorHover5, Color(this.get(JoplinStyleStringNames.BackgroundColor5)).darken(0.2).hex());
		this.set(JoplinStyleStringNames.BackgroundColorActive5, Color(this.get(JoplinStyleStringNames.BackgroundColor5)).darken(0.4).hex());

		this.set(JoplinStyleNumberNames.ConfigScreenPadding, this.get(JoplinStyleNumberNames.MainPadding) * 2);

		this.get(JoplinStyleClassNames.Icon).color = this.get(JoplinStyleStringNames.MainTextColor1);

		this.get(JoplinStyleClassNames.LineInput).color = this.get(JoplinStyleStringNames.MainTextColor1);
		this.get(JoplinStyleClassNames.LineInput).backgroundColor = this.get(JoplinStyleStringNames.BackgroundColor1);

		this.get(JoplinStyleClassNames.HeaderStyle).color = this.get(JoplinStyleStringNames.MainTextColor1);
		this.get(JoplinStyleClassNames.HeaderStyle).backgroundColor = this.get(JoplinStyleStringNames.BackgroundColor1);

		this.get(JoplinStyleClassNames.InputStyle).color, this.get(JoplinStyleStringNames.MainTextColor1);
		this.get(JoplinStyleClassNames.InputStyle).backgroundColor = this.get(JoplinStyleStringNames.BackgroundColor1);
		this.get(JoplinStyleClassNames.InputStyle).borderColor = this.get(JoplinStyleStringNames.DividerColor);

		this.get(JoplinStyleClassNames.ContainerStyle).color = this.get(JoplinStyleStringNames.MainTextColor1);
		this.get(JoplinStyleClassNames.ContainerStyle).backgroundColor = this.get(JoplinStyleStringNames.BackgroundColor1);

		this.get(JoplinStyleClassNames.ButtonStyle).color = this.get(JoplinStyleStringNames.MainTextColor4);
		this.get(JoplinStyleClassNames.ButtonStyle).backgroundColor = this.get(JoplinStyleStringNames.BackgroundColor4);
		this.get(JoplinStyleClassNames.ButtonStyle).borderColor = this.get(JoplinStyleStringNames.BorderColor4);
		this.get(JoplinStyleClassNames.ButtonStyle).userSelect = 'none';
		this.get(JoplinStyleClassNames.ButtonStyle).cursor = 'pointer';

		this.get(JoplinStyleClassNames.TagStyle).fontSize = this.get(JoplinStyleNumberNames.FontSize);
		this.get(JoplinStyleClassNames.TagStyle).fontFamily = this.fontFamily;
		this.get(JoplinStyleClassNames.TagStyle).paddingTop = 4;
		this.get(JoplinStyleClassNames.TagStyle).paddingBottom = 4;
		this.get(JoplinStyleClassNames.TagStyle).paddingRight = 10;
		this.get(JoplinStyleClassNames.TagStyle).paddingLeft = 10;
		this.get(JoplinStyleClassNames.TagStyle).backgroundColor = this.get(JoplinStyleStringNames.BackgroundColor3);
		this.get(JoplinStyleClassNames.TagStyle).color = this.get(JoplinStyleStringNames.MainTextColor3);
		this.get(JoplinStyleClassNames.TagStyle).display = 'flex';
		this.get(JoplinStyleClassNames.TagStyle).alignItems = 'center';
		this.get(JoplinStyleClassNames.TagStyle).justifyContent = 'center';
		this.get(JoplinStyleClassNames.TagStyle).marginRight = 8;
		this.get(JoplinStyleClassNames.TagStyle).borderRadius = 100;

		this.get(JoplinStyleClassNames.ToolbarStyle).height = this.get(JoplinStyleNumberNames.ToolbarHeight);
		this.get(JoplinStyleClassNames.ToolbarStyle).minWidth = this.get(JoplinStyleNumberNames.ToolbarHeight);
		this.get(JoplinStyleClassNames.ToolbarStyle).display = 'flex';
		this.get(JoplinStyleClassNames.ToolbarStyle).alignItems = 'center';
		this.get(JoplinStyleClassNames.ToolbarStyle).paddingLeft = this.get(JoplinStyleNumberNames.HeaderButtonHPadding);
		this.get(JoplinStyleClassNames.ToolbarStyle).paddingRight = this.get(JoplinStyleNumberNames.HeaderButtonHPadding);
		this.get(JoplinStyleClassNames.ToolbarStyle).textDecoration = 'none';
		this.get(JoplinStyleClassNames.ToolbarStyle).fontFamily = this.fontFamily;
		this.get(JoplinStyleClassNames.ToolbarStyle).fontSize = this.get(JoplinStyleNumberNames.FontSize);
		this.get(JoplinStyleClassNames.ToolbarStyle).boxSizing = 'border-box';
		this.get(JoplinStyleClassNames.ToolbarStyle).cursor = 'default';
		this.get(JoplinStyleClassNames.ToolbarStyle).justifyContent = 'center';
		this.get(JoplinStyleClassNames.ToolbarStyle).color = this.get(JoplinStyleStringNames.MainTextColor1);
		this.get(JoplinStyleClassNames.ToolbarStyle).whiteSpace = 'nowrap';

		this.get(JoplinStyleClassNames.TextStyle).fontFamily = this.get(JoplinStyleClassNames.GlobalBaseStyle).fontFamily;
		this.get(JoplinStyleClassNames.TextStyle).fontSize = this.get(JoplinStyleNumberNames.FontSize);
		this.get(JoplinStyleClassNames.TextStyle).lineHeight = '1.6em';
		this.get(JoplinStyleClassNames.TextStyle).color = this.get(JoplinStyleStringNames.MainTextColor1);

		this.get(JoplinStyleClassNames.ClickableTextStyle).copy(this.get(JoplinStyleClassNames.TextStyle));
		this.get(JoplinStyleClassNames.ClickableTextStyle).userSelect = 'none';

		this.get(JoplinStyleClassNames.TextStyle2).copy(this.get(JoplinStyleClassNames.TextStyle));
		this.get(JoplinStyleClassNames.TextStyle2).color = this.get(JoplinStyleStringNames.MainTextColor2);

		this.get(JoplinStyleClassNames.TextStyleMinor).copy(this.get(JoplinStyleClassNames.TextStyle));
		this.get(JoplinStyleClassNames.TextStyleMinor).color = this.get(JoplinStyleStringNames.FadedTextColor1);
		this.get(JoplinStyleClassNames.TextStyleMinor).fontSize = this.get(JoplinStyleNumberNames.FontSize) * 0.8;

		this.get(JoplinStyleClassNames.UrlStyle).copy(this.get(JoplinStyleClassNames.TextStyle));
		this.get(JoplinStyleClassNames.UrlStyle).textDecoration = 'underline';
		this.get(JoplinStyleClassNames.UrlStyle).color = this.get(JoplinStyleStringNames.UrlTextColor);

		this.get(JoplinStyleClassNames.H1Style).copy(this.get(JoplinStyleClassNames.TextStyle));
		this.get(JoplinStyleClassNames.H1Style).color = this.get(JoplinStyleStringNames.MainTextColor1);
		this.get(JoplinStyleClassNames.H1Style).fontSize = this.get(JoplinStyleClassNames.TextStyle).fontSize * 1.5;
		this.get(JoplinStyleClassNames.H1Style).fontWeight = 'bold';

		this.get(JoplinStyleClassNames.H2Style).copy(this.get(JoplinStyleClassNames.TextStyle));
		this.get(JoplinStyleClassNames.H2Style).color = this.get(JoplinStyleStringNames.MainTextColor1),
		this.get(JoplinStyleClassNames.H2Style).fontSize = this.get(JoplinStyleClassNames.TextStyle).fontSize * 1.3,
		this.get(JoplinStyleClassNames.H2Style).fontWeight = 'bold';

		this.get(JoplinStyleClassNames.DialogModalLayer).zIndex = 9999;
		this.get(JoplinStyleClassNames.DialogModalLayer).display = 'flex';
		this.get(JoplinStyleClassNames.DialogModalLayer).position = 'absolute';
		this.get(JoplinStyleClassNames.DialogModalLayer).top = 0;
		this.get(JoplinStyleClassNames.DialogModalLayer).left = 0;
		this.get(JoplinStyleClassNames.DialogModalLayer).width = '100%';
		this.get(JoplinStyleClassNames.DialogModalLayer).height = '100%';
		this.get(JoplinStyleClassNames.DialogModalLayer).backgroundColor = 'rgba(0,0,0,0.6)';
		this.get(JoplinStyleClassNames.DialogModalLayer).alignItems = 'flex-start';
		this.get(JoplinStyleClassNames.DialogModalLayer).justifyContent = 'center';

		this.get(JoplinStyleClassNames.ControlBox).marginBottom = '1em',
		this.get(JoplinStyleClassNames.ControlBox).color = 'black', // This will apply for the calendar
		this.get(JoplinStyleClassNames.ControlBox).display = 'flex',
		this.get(JoplinStyleClassNames.ControlBox).flexDirection = 'row',
		this.get(JoplinStyleClassNames.ControlBox).alignItems = 'center',

		this.get(JoplinStyleClassNames.ControlBoxLabel).marginRight = '1em',
		this.get(JoplinStyleClassNames.ControlBoxLabel).width = '10em',
		this.get(JoplinStyleClassNames.ControlBoxLabel).display = 'inline-block',
		this.get(JoplinStyleClassNames.ControlBoxLabel).fontWeight = 'bold';

		this.get(JoplinStyleClassNames.ControlBoxValue).display = 'inline-block',

		this.get(JoplinStyleClassNames.DialogBox).backgroundColor = this.get(JoplinStyleStringNames.BackgroundColor1),
		this.get(JoplinStyleClassNames.DialogBox).padding = 16,
		this.get(JoplinStyleClassNames.DialogBox).boxShadow = '6px 6px 20px rgba(0,0,0,0.5)',
		this.get(JoplinStyleClassNames.DialogBox).marginTop = 20,
		this.get(JoplinStyleClassNames.DialogBox).maxHeight = '80%',
		this.get(JoplinStyleClassNames.DialogBox).display = 'flex',
		this.get(JoplinStyleClassNames.DialogBox).flexDirection = 'column';

		this.get(JoplinStyleClassNames.ButtonIconStyle).color = this.get(JoplinStyleStringNames.IconColor),
		this.get(JoplinStyleClassNames.ButtonIconStyle).marginRight = 6,

		this.get(JoplinStyleClassNames.NotificationBox).backgroundColor = this.get(JoplinStyleStringNames.WarningBackgroundColor);
		this.get(JoplinStyleClassNames.NotificationBox).display = 'flex';
		this.get(JoplinStyleClassNames.NotificationBox).alignItems = 'center';
		this.get(JoplinStyleClassNames.NotificationBox).padding = 10;
		this.get(JoplinStyleClassNames.NotificationBox).fontSize = this.get(JoplinStyleNumberNames.FontSize);

		this.get(JoplinStyleClassNames.DialogTitle).copy(this.get(JoplinStyleClassNames.H1Style));
		this.get(JoplinStyleClassNames.DialogTitle).marginBottom = '1.2em';

		this.get(JoplinStyleClassNames.DropdownList).copy(this.get(JoplinStyleClassNames.InputStyle));

		this.set(JoplinStyleStringNames.HoverTextColor1, this.get(JoplinStyleStringNames.MainTextColor1));
		this.set(JoplinStyleStringNames.HoverBackground, `${this.get(JoplinStyleStringNames.SelectedTextColor2)}44`);

		// In general the highlighted color, used to highlight text or icons, should be the same as selectedColor2
		// but some times, depending on the theme, it might be too dark or too light, so it can be
		// specified directly by the theme too.
		if (!this.has(JoplinStyleStringNames.HoverTextColor1)) {
			this.set(JoplinStyleStringNames.HighlightedTextColor, this.get(JoplinStyleStringNames.SelectedTextColor2));
		}

		return this;
	}



	private InitializeGlobalStyles(): void {
		this.set(this.get(JoplinStyleClassNames.GlobalBaseStyle).marginRight, this.get(JoplinStyleClassNames.GlobalBaseStyle).margin);
		this.set(this.get(JoplinStyleClassNames.GlobalBaseStyle).marginLeft, this.get(JoplinStyleClassNames.GlobalBaseStyle).margin);
		this.set(this.get(JoplinStyleClassNames.GlobalBaseStyle).marginTop, this.get(JoplinStyleClassNames.GlobalBaseStyle).margin);
		this.set(this.get(JoplinStyleClassNames.GlobalBaseStyle).marginBottom, this.get(JoplinStyleClassNames.GlobalBaseStyle).margin);

		this.set(this.get(JoplinStyleClassNames.GlobalIconStyle).fontSize, 30);

		this.set(this.get(JoplinStyleClassNames.GlobalLineInput).fontFamily, this.get(JoplinStyleClassNames.GlobalBaseStyle).fontFamily);
		this.set(this.get(JoplinStyleClassNames.GlobalLineInput).maxHeight, 22);
		this.set(this.get(JoplinStyleClassNames.GlobalLineInput).height, 22);
		this.set(this.get(JoplinStyleClassNames.GlobalLineInput).paddingLeft, 5);

		this.set(this.get(JoplinStyleClassNames.GlobalHeaderStyle).fontFamily, this.get(JoplinStyleClassNames.GlobalBaseStyle).fontFamily);

		this.set(this.get(JoplinStyleClassNames.GlobalInputStyle).border, '1px solid');
		this.set(this.get(JoplinStyleClassNames.GlobalInputStyle).height, 24);
		this.set(this.get(JoplinStyleClassNames.GlobalInputStyle).maxHeight, 24);
		this.set(this.get(JoplinStyleClassNames.GlobalInputStyle).paddingLeft, 5);
		this.set(this.get(JoplinStyleClassNames.GlobalInputStyle).paddingRight, 5);
		this.set(this.get(JoplinStyleClassNames.GlobalInputStyle).boxSizing, 'border-box');

		this.set(this.get(JoplinStyleClassNames.GlobalContainerStyle).overflow, 'auto');
		this.set(this.get(JoplinStyleClassNames.GlobalContainerStyle).overflowY, 'auto');

		// this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).marginRight, 10);
		this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).border, '1px solid');
		this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).minHeight, 26);
		this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).minWidth, 80);
		// this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).maxWidth, 220);
		this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).paddingLeft, 12);
		this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).paddingRight, 12);
		this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).paddingTop, 6);
		this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).paddingBottom, 6);
		// this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).boxShadow, '0px 1px 1px rgba(0,0,0,0.3)');
		this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).fontSize, this.get(JoplinStyleClassNames.GlobalBaseStyle).fontSize);
		this.set(this.get(JoplinStyleClassNames.GlobalButtonStyle).borderRadius, 4);

	}

	// public has(name:JoplinStyleColorNames): boolean {
	// 	return this.has(name);
	// }

	// public get(name:string): any {
	// 	return this.get(name);
	// }

	// public set(name:string,value:any): void {
	// 	this.set(name, value);
	// 	return;
	// }

}
