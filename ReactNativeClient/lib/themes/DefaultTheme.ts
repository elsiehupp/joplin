// import { CssStyle } from "./TextStyle";
// import { BoxStyle } from "./BoxStyle";
import JoplinStyleSheetNames from './JoplinStyleSheetNames';
import JoplinStyleStringNames from './JoplinStyleStringNames';
import JoplinStyleClassNames from './JoplinStyleClassNames';
import JoplinStyleNumberNames from './JoplinStyleNumberNames';
import StyleProvider from './StyleProvider';

const Setting = require('lib/models/Setting').default;
const Color = require('color');

export default class DefaultTheme extends StyleProvider {
	public constructor() {
		super();

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


	protected InitializeOtherStyles() {	// globalStyle should be used for properties that do not change across themes
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
		this.set(JoplinStyleStringNames.IconColor, Color(this.get(JoplinStyleStringNames.MainTextColor1)).alpha(0.8));

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

		this.get(JoplinStyleClassNames.NoteEditor).color = this.get(JoplinStyleStringNames.MainTextColor1);
		console.log(JoplinStyleClassNames.NoteEditor, this.get(JoplinStyleClassNames.NoteEditor).color);

		this.get(JoplinStyleClassNames.TextStyle).fontFamily = this.get(JoplinStyleClassNames.GlobalBaseStyle).fontFamily;
		this.get(JoplinStyleClassNames.TextStyle).fontSize = this.get(JoplinStyleNumberNames.FontSize);
		this.get(JoplinStyleClassNames.TextStyle).lineHeight = '1.6em';
		this.get(JoplinStyleClassNames.TextStyle).color = this.get(JoplinStyleStringNames.MainTextColor1);

		this.set(JoplinStyleClassNames.ClickableTextStyle, Object.assign({}, this.get(JoplinStyleClassNames.TextStyle)));
		this.get(JoplinStyleClassNames.ClickableTextStyle).userSelect = 'none';

		this.set(JoplinStyleClassNames.TextStyle2, Object.assign({}, this.get(JoplinStyleClassNames.TextStyle)));
		this.get(JoplinStyleClassNames.TextStyle2).color = this.get(JoplinStyleStringNames.MainTextColor2);

		this.set(JoplinStyleClassNames.TextStyleMinor, Object.assign({}, this.get(JoplinStyleClassNames.TextStyle)));
		this.get(JoplinStyleClassNames.TextStyleMinor).color = this.get(JoplinStyleStringNames.FadedTextColor1);
		this.get(JoplinStyleClassNames.TextStyleMinor).fontSize = this.get(JoplinStyleNumberNames.FontSize) * 0.8;

		this.set(JoplinStyleClassNames.UrlStyle, Object.assign({}, this.get(JoplinStyleClassNames.TextStyle)));
		this.get(JoplinStyleClassNames.UrlStyle).textDecoration = 'underline';
		this.get(JoplinStyleClassNames.UrlStyle).color = this.get(JoplinStyleStringNames.UrlTextColor);

		this.set(JoplinStyleClassNames.H1Style, Object.assign({}, this.get(JoplinStyleClassNames.TextStyle)));
		this.get(JoplinStyleClassNames.H1Style).color = this.get(JoplinStyleStringNames.MainTextColor1);
		this.get(JoplinStyleClassNames.H1Style).fontSize = this.get(JoplinStyleClassNames.TextStyle).fontSize * 1.5;
		this.get(JoplinStyleClassNames.H1Style).fontWeight = 'bold';

		this.set(JoplinStyleClassNames.H2Style, Object.assign({}, this.get(JoplinStyleClassNames.TextStyle)));
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

		this.set(JoplinStyleClassNames.DialogTitle, Object.assign({}, this.get(JoplinStyleClassNames.H1Style)));
		this.get(JoplinStyleClassNames.DialogTitle).marginBottom = '1.2em';

		this.set(JoplinStyleClassNames.DropdownList, Object.assign({}, this.get(JoplinStyleClassNames.InputStyle)));

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



	protected InitializeGlobalStyles(): void {
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


	public getElectronStyleSheet(styleSheet:string, props:any): Object {
		if (!this.has(styleSheet)) {
			this.initializeElectronStyleSheets(styleSheet, props);
		}
		return this.get(styleSheet);
	}

	protected initializeElectronStyleSheets(styleSheet:JoplinStyleSheetNames, props:any): void {


		const TinyMceExtraToolbarContainer = {
			backgroundColor: this.get('backgroundColor3'),
			display: 'flex',
			flexDirection: 'row',
			position: 'absolute',
			height: this.get('toolbarHeight'),
			zIndex: 2,
			top: 0,
			padding: this.get('toolbarPadding'),
		};


		const toggleEditorsButtonConstants = {
			iconSize: 0,
			mdIconWidth: 0,
			buttonHeight: 0,
			mdIconPadding: 0,
		};

		toggleEditorsButtonConstants.iconSize = 15;
		toggleEditorsButtonConstants.mdIconWidth = toggleEditorsButtonConstants.iconSize * 1.25;
		toggleEditorsButtonConstants.buttonHeight = this.get('toolbarHeight') - 7;
		toggleEditorsButtonConstants.mdIconPadding = Math.round((toggleEditorsButtonConstants.buttonHeight - toggleEditorsButtonConstants.iconSize) / 2) + 3;


		switch (styleSheet) {

		case JoplinStyleSheetNames.CodeMirrorNoteBody:
			this.set(JoplinStyleClassNames.CodeMirrorNoteBodyRoot, {
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				...props.style,
			});
			this.set(JoplinStyleClassNames.CodeMirrorNoteBodyRowToolbar, {
				position: 'relative',
				display: 'flex',
				flexDirection: 'row',
			});
			this.set(JoplinStyleClassNames.CodeMirrorNoteBodyRowEditorViewer, {
				position: 'relative',
				display: 'flex',
				flexDirection: 'row',
				flex: 1,
				paddingTop: 10,
			});
			this.set(JoplinStyleClassNames.CodeMirrorNoteBodyCellEditor, {
				position: 'relative',
				display: 'flex',
				flex: 1,
			});
			this.set(JoplinStyleClassNames.CodeMirrorNoteBodyCellViewer, {
				position: 'relative',
				display: 'flex',
				flex: 1,
				borderLeftWidth: 1,
				borderLeftColor: this.get('dividerColor'),
				borderLeftStyle: 'solid',
			});
			this.set(JoplinStyleClassNames.CodeMirrorNoteBodyViewer, {
				display: 'flex',
				overflow: 'hidden',
				verticalAlign: 'top',
				boxSizing: 'border-box',
				width: '100%',
			});
			this.set(JoplinStyleClassNames.CodeMirrorNoteBodyEditor, {
				display: 'flex',
				width: 'auto',
				height: 'auto',
				flex: 1,
				overflowY: 'hidden',
				paddingTop: 0,
				lineHeight: `${this.get('textAreaLineHeight')}px`,
				fontSize: `${this.get('editorFontSize')}px`,
				color: this.get('color'),
				backgroundColor: this.get('backgroundColor'),
				codeMirrorTheme: this.get('codeMirrorTheme'), // Defined in this.get('js
			});
			this.set(JoplinStyleSheetNames.CodeMirrorNoteBody, {
				root: this.get(JoplinStyleClassNames.CodeMirrorNoteBodyRoot),
				rowToolbar: this.get(JoplinStyleClassNames.CodeMirrorNoteBodyRowToolbar),
				owEditorViewer: this.get(JoplinStyleClassNames.CodeMirrorNoteBodyRowEditorViewer),
				cellEditor: this.get(JoplinStyleClassNames.CodeMirrorNoteBodyCellEditor),
				cellViewer: this.get(JoplinStyleClassNames.CodeMirrorNoteBodyCellViewer),
				viewer: this.get(JoplinStyleClassNames.CodeMirrorNoteBodyViewer),
				editor: this.get(JoplinStyleClassNames.CodeMirrorNoteBodyEditor),
			});
			break;


		case JoplinStyleSheetNames.CodeMirrorToolbar:
			this.set(JoplinStyleClassNames.CodeMirrorToolbarRoot, {
				flex: 1,
				marginBottom: 0,
			});
			this.set(JoplinStyleSheetNames.CodeMirrorToolbar, {
				root: this.get(JoplinStyleClassNames.CodeMirrorToolbarRoot),
			});
			break;


		case JoplinStyleSheetNames.KeyMapConfigScreen:
			this.set(JoplinStyleClassNames.KeyMapConfigScreenContainer, {
				...this.get('containerStyle'),
				padding: this.get('configScreenPadding'),
				backgroundColor: this.get('backgroundColor3'),
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenActionsContainer, {
				display: 'flex',
				flexDirection: 'row',
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenRecorderContainer, {
				padding: 2,
				flexGrow: 1,
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenFilterInput, {
				...this.get('inputStyle'),
				flexGrow: 1,
				minHeight: 29,
				alignSelf: 'center',
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenRecorderInput, {
				...this.get('inputStyle'),
				minHeight: 29,
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenLabel, {
				...this.get('textStyle'),
				alignSelf: 'center',
				marginRight: 10,
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenTable, {
				...this.get('containerStyle'),
				marginTop: 16,
				overflow: 'auto',
				width: '100%',
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenTableShortcutColumn, {
				...this.get('textStyle'),
				width: '60%',
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenTableCommandColumn, {
				...this.get('textStyle'),
				width: 'auto',
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenTableCell, {
				display: 'flex',
				flexDirection: 'row',
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenTableCellContent, {
				flexGrow: 1,
				alignSelf: 'center',
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenTableCellStatus, {
				height: '100%',
				alignSelf: 'center',
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenKbd, {
				fontFamily: 'sans-serif',
				border: '1px solid',
				borderRadius: 4,
				backgroundColor: this.get('raisedBackgroundColor'),
				padding: 2,
				paddingLeft: 6,
				paddingRight: 6,
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenDisabled, {
				color: this.get('colorFaded'),
				fontStyle: 'italic',
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenInlineButton, {
				...this.get('buttonStyle'),
				marginLeft: 12,
			});
			this.set(JoplinStyleClassNames.KeyMapConfigScreenWarning, {
				...this.get('textStyle'),
				backgroundColor: this.get('warningBackgroundColor'),
				paddingLeft: 16,
				paddingRight: 16,
				paddingTop: 2,
				paddingBottom: 2,
			});
			this.set(JoplinStyleSheetNames.KeyMapConfigScreen, {
				container: this.get(JoplinStyleClassNames.KeyMapConfigScreenContainer),
				actionsContainer: this.get(JoplinStyleClassNames.KeyMapConfigScreenActionsContainer),
				recorderContainer: this.get(JoplinStyleClassNames.KeyMapConfigScreenRecorderContainer),
				filterInput: this.get(JoplinStyleClassNames.KeyMapConfigScreenFilterInput),
				recorderInput: this.get(JoplinStyleClassNames.KeyMapConfigScreenRecorderInput),
				label: this.get(JoplinStyleClassNames.KeyMapConfigScreenLabel),
				table: this.get(JoplinStyleClassNames.KeyMapConfigScreenTable),
				tableShortcutColumn: this.get(JoplinStyleClassNames.KeyMapConfigScreenTableShortcutColumn),
				tableCommandColumn: this.get(JoplinStyleClassNames.KeyMapConfigScreenTableCommandColumn),
				tableCell: this.get(JoplinStyleClassNames.KeyMapConfigScreenTableCell),
				tableCellContent: this.get(JoplinStyleClassNames.KeyMapConfigScreenTableCellContent),
				tableCellStatus: this.get(JoplinStyleClassNames.KeyMapConfigScreenTableCellStatus),
				kbd: this.get(JoplinStyleClassNames.KeyMapConfigScreenKbd),
				disabled: this.get(JoplinStyleClassNames.KeyMapConfigScreenDisabled),
				inlineButton: this.get(JoplinStyleClassNames.KeyMapConfigScreenInlineButton),
				warning: this.get(JoplinStyleClassNames.KeyMapConfigScreenWarning),
			});
			break;


		case JoplinStyleSheetNames.MultiNoteActions:
			this.set(JoplinStyleClassNames.MultiNoteActionsRoot, {
				Display: 'inline-flex',
				justifyContent: 'center',
				paddingTop: this.get('marginTop'),
				width: '100%',
			});
			this.set(JoplinStyleClassNames.MultiNoteActionsItemList, {
				display: 'flex',
				flexDirection: 'column',
			});
			this.set(JoplinStyleClassNames.MultiNoteActionsButton, {
				...this.get('buttonStyle'),
				marginBottom: 10,
			});
			this.set(JoplinStyleSheetNames.MultiNoteActions, {
				root: this.get(JoplinStyleClassNames.MultiNoteActionsRoot),
				itemList: this.get(JoplinStyleClassNames.MultiNoteActionsItemList),
				button: this.get(JoplinStyleClassNames.MultiNoteActionsButton),
			});
			break;


		case JoplinStyleSheetNames.NoteEditorBody:
			this.set(JoplinStyleClassNames.NoteEditorBodyRoot, {
				boxSizing: 'border-box',
				paddingLeft: 0,// this.get('mainPadding,
				paddingTop: 0,
				width: '100%',
				height: '100%',
			});
			this.set(JoplinStyleClassNames.NoteEditorBodyTitleInput, {
				flex: 1,
				display: 'inline-block',
				paddingTop: 5,
				minHeight: 35,
				boxSizing: 'border-box',
				fontWeight: 'bold',
				paddingBottom: 5,
				paddingLeft: 0,
				paddingRight: 8,
				marginLeft: 5,
				color: this.get('textStyle.color'),
				fontSize: Math.round(this.get('textStyle').fontSize * 1.5),
				backgroundColor: this.get('backgroundColor'),
				border: 'none',
			});
			this.set(JoplinStyleClassNames.NoteEditorBodyWarningBanner, {
				background: this.get('warningBackgroundColor'),
				fontFamily: this.get('fontFamily'),
				padding: 10,
				fontSize: this.get('fontSize'),
				marginTop: 5,
				marginBottom: 5,
			});
			this.set(JoplinStyleClassNames.NoteEditorBodyTinyMCE, {
				width: '100%',
				height: '100%',
			});
			this.set(JoplinStyleClassNames.NoteEditorBodyToolbar, {
				marginTop: 4,
				marginBottom: 0,
			});
			this.set(JoplinStyleClassNames.NoteEditorBodyTitleDate, {
				...this.get('textStyle'),
				color: this.get('colorFaded'),
				paddingLeft: 10,
				paddingRight: 10,
			});
			this.set(JoplinStyleClassNames.NoteEditorBodyResourceWatchBanner, {
				...this.get('textStyle'),
				padding: 10,
				marginLeft: 5,
				marginBottom: 10,
				color: this.get('colorWarn'),
				backgroundColor: this.get('warningBackgroundColor'),
			});
			this.set(JoplinStyleClassNames.NoteEditorBodyResourceWatchBannerLine, {
				marginTop: 0,
				marginBottom: 10,
			});
			this.set(JoplinStyleSheetNames.NoteEditorBody, {
				root: this.get(JoplinStyleClassNames.NoteEditorBodyRoot),
				titleInput: this.get(JoplinStyleClassNames.NoteEditorBodyTitleInput),
				warningBanner: this.get(JoplinStyleClassNames.NoteEditorBodyWarningBanner),
				tinyMCE: this.get(JoplinStyleClassNames.NoteEditorBodyTinyMCE),
				toolbar: this.get(JoplinStyleClassNames.NoteEditorBodyToolbar),
				titleDate: this.get(JoplinStyleClassNames.NoteEditorBodyTitleDate),
				resourceWatchBanner: this.get(JoplinStyleClassNames.NoteEditorBodyResourceWatchBanner),
				resourceWatchBannerLine: this.get(JoplinStyleClassNames.NoteEditorBodyResourceWatchBannerLine),
			});
			break;


		case JoplinStyleSheetNames.NoteToolbar:
			this.set(JoplinStyleClassNames.NoteToolbarRoot, {
				...props.style,
				borderBottom: 'none',
				backgroundColor: this.get('backgroundColor'),
			});
			this.set(JoplinStyleSheetNames.NoteToolbar, {
				root: this.get(JoplinStyleClassNames.NoteToolbarRoot),
			});
			break;


		case JoplinStyleSheetNames.ShareNoteDialogue:
			this.set(JoplinStyleClassNames.ShareNoteDialogueNoteList, {
				marginBottom: 10,
			});
			this.set(JoplinStyleClassNames.ShareNoteDialogueNote, {
				flex: 1,
				flexDirection: 'row',
				display: 'flex',
				alignItems: 'center',
				border: '1px solid',
				borderColor: this.get('dividerColor'),
				padding: '0.5em',
				marginBottom: 5,
			});
			this.set(JoplinStyleClassNames.ShareNoteDialogueNoteTitle, {
				...this.get('textStyle'),
				flex: 1,
				display: 'flex',
				color: this.get('color'),
			});
			this.set(JoplinStyleClassNames.ShareNoteDialogueNoteRemoveButton, {
				background: 'none',
				border: 'none',
			});
			this.set(JoplinStyleClassNames.ShareNoteDialogueNoteRemoveButtonIcon, {
				color: this.get('color'),
				fontSize: '1.4em',
			});
			this.set(JoplinStyleClassNames.ShareNoteDialogueCopyShareLinkButton, {
				...this.get('buttonStyle'),
				marginBottom: 10,
			});
			this.set(JoplinStyleSheetNames.ShareNoteDialogue, {
				noteList: this.get(JoplinStyleClassNames.ShareNoteDialogueNoteList),
				note: this.get(JoplinStyleClassNames.ShareNoteDialogueNote),
				noteTitle: this.get(JoplinStyleClassNames.ShareNoteDialogueNoteTitle),
				noteRemoveButton: this.get(JoplinStyleClassNames.ShareNoteDialogueNoteRemoveButton),
				noteRemoveButtonIcon: this.get(JoplinStyleClassNames.ShareNoteDialogueNoteRemoveButtonIcon),
				copyShareLinkButton: this.get(JoplinStyleClassNames.ShareNoteDialogueCopyShareLinkButton),
			});
			break;


		case JoplinStyleSheetNames.TinyMCE:

			this.set(JoplinStyleClassNames.TinyMCEDisabledOverlay, {
				zIndex: 10,
				position: 'absolute',
				backgroundColor: 'white',
				opacity: 0.7,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: 20,
				paddingTop: 50,
				textAlign: 'center',
				width: '100%',
			});
			this.set(JoplinStyleClassNames.TinyMCERootStyle, {
				position: 'relative',
				width: props.style.width,
				height: props.style.height,
			});
			this.set(JoplinStyleClassNames.TinyMCELeftExtraToolbarContainer, {
				...TinyMceExtraToolbarContainer,
				width: 80,
				left: 0,
			});
			this.set(JoplinStyleClassNames.TinyMCERightExtraToolbarContainer, {
				...TinyMceExtraToolbarContainer,
				alignItems: 'center',
				justifyContent: 'flex-end',
				width: 70,
				right: 0,
				paddingRight: this.get('mainPadding'),
			});
			this.set(JoplinStyleClassNames.TinyMCEExtraToolbarButton, {
				display: 'flex',
				border: 'none',
				background: 'none',
			});
			this.set(JoplinStyleClassNames.TinyMCEExtraToolbarButtonIcon, {
				fontSize: this.get('toolbarIconSize'),
				color: this.get('color3'),
			});
			this.set(JoplinStyleSheetNames.TinyMCE, {
				disabledOverlay: this.get(JoplinStyleClassNames.TinyMCEDisabledOverlay),
				rootStyle: this.get(JoplinStyleClassNames.TinyMCERootStyle),
				leftExtraToolbarContainer: this.get(JoplinStyleClassNames.TinyMCELeftExtraToolbarContainer),
				rightExtraToolbarContainer: this.get(JoplinStyleClassNames.TinyMCERightExtraToolbarContainer),
				extraToolbarButton: this.get(JoplinStyleClassNames.TinyMCEExtraToolbarButton),
				extraToolbarButtonIcon: this.get(JoplinStyleClassNames.TinyMCEExtraToolbarButtonIcon),
			});
			break;


		case JoplinStyleSheetNames.ToggleEditorsButton:

			this.set(JoplinStyleClassNames.ToggleEditorsButtonInnerButton, {
				borderStyle: 'solid',
				borderColor: this.get('color3'),
				borderWidth: 1,
				borderRadius: 0,
				width: toggleEditorsButtonConstants.mdIconWidth + toggleEditorsButtonConstants.mdIconPadding * 2,
				height: toggleEditorsButtonConstants.buttonHeight,
				display: 'flex',
				justifyContent: 'center',
			});

			this.set(JoplinStyleClassNames.ToggleEditorsButtonMarkdown, {
				button: {
					border: 'none',
					padding: 0,
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					background: 'none',
				},
				leftInnerButton: {
					...this.get(JoplinStyleClassNames.ToggleEditorsButtonInnerButton),
					backgroundColor: this.get('color3'),
					borderTopLeftRadius: 4,
					borderBottomLeftRadius: 4,
				},
				rightInnerButton: {
					...this.get(JoplinStyleClassNames.ToggleEditorsButtonInnerButton),
					borderTopRightRadius: 4,
					borderBottomRightRadius: 4,
					opacity: 0.5,
				},
				leftIcon: {
					fontSize: toggleEditorsButtonConstants.iconSize,
					position: 'relative',
					top: 2,
					color: this.get('backgroundColor3'),
				},
				rightIcon: {
					fontSize: toggleEditorsButtonConstants.iconSize - 1,
					borderLeft: 'none',
					position: 'relative',
					top: 2,
					color: this.get('color3'),
				},
			});

			this.set(JoplinStyleClassNames.ToggleEditorsButtonRichText, {
				button: {
					border: 'none',
					padding: 0,
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					background: 'none',
				},
				leftInnerButton: {
					...this.get(JoplinStyleClassNames.ToggleEditorsButtonInnerButton),
					opacity: 0.5,
					borderTopLeftRadius: 4,
					borderBottomLeftRadius: 4,
				},
				rightInnerButton: {
					...this.get(JoplinStyleClassNames.ToggleEditorsButtonInnerButton),
					backgroundColor: this.get('color3'),
					borderTopRightRadius: 4,
					borderBottomRightRadius: 4,
				},
				leftIcon: {
					fontSize: toggleEditorsButtonConstants.iconSize,
					position: 'relative',
					top: 2,
					color: this.get('color3'),
				},
				rightIcon: {
					color: this.get('color3'),
					fontSize: toggleEditorsButtonConstants.iconSize - 1,
					borderLeft: 'none',
					position: 'relative',
					top: 2,
				},
			});
			this.set(JoplinStyleSheetNames.ToggleEditorsButton, {
				innerButton: this.get(JoplinStyleClassNames.ToggleEditorsButtonInnerButton),
				markdown: this.get(JoplinStyleClassNames.ToggleEditorsButtonMarkdown),
				richText: this.get(JoplinStyleClassNames.ToggleEditorsButtonRichText),
			});
			break;

		default:
			throw new Error(`Style sheet ${styleSheet} does not exist.`);
		}
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
