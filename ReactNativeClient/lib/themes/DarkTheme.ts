import DefaultTheme from './DefaultTheme';
import JoplinStyleStringNames from './JoplinStyleStringNames';
import JoplinStyleColorAppearance from './JoplinStyleColorAppearance';

// This is the default dark theme in Joplin
export default class DarkTheme extends DefaultTheme {
	public constructor() {
		super();

		this.appearance = JoplinStyleColorAppearance.Dark;
		this.themeID = 'dark';
		this.set('codeMirrorTheme', this.themeID);
		this.codeThemeCss = 'atom-one-dark-reasonable.css';

		// Color scheme "1" is the basic one, like used to display the note
		// content. It's basically dark gray text on white background
		this.set(JoplinStyleStringNames.BackgroundColor1, '#1D2024');
		this.set(JoplinStyleStringNames.BackgroundColorTransparent, 'rgba(255,255,255,0.9)');
		this.set(JoplinStyleStringNames.OddBackgroundColor, '#dddddd');
		this.set(JoplinStyleStringNames.MainTextColor1, '#dddddd');
		this.set(JoplinStyleStringNames.ErrorTextColor1, 'red');
		this.set(JoplinStyleStringNames.WarningTextColor, '#9A5B00');
		this.set(JoplinStyleStringNames.FadedTextColor1, '#999999'); // For less important text
		this.set(JoplinStyleStringNames.BrightTextColor, '#ffffff'); // For important text
		this.set(JoplinStyleStringNames.DividerColor, '#555555');
		this.set(JoplinStyleStringNames.SelectedTextColor1, '#616161');
		this.set(JoplinStyleStringNames.UrlTextColor, 'rgb(166,166,255)');

		// Color scheme "2" is used for the sidebar. It's white text over
		// dark blue background.
		this.set(JoplinStyleStringNames.BackgroundColor2, '#181A1D');
		this.set(JoplinStyleStringNames.MainTextColor2, '#ffffff');
		this.set(JoplinStyleStringNames.SelectedTextColor2, '#013F74');
		this.set(JoplinStyleStringNames.ErrorTextColor2, '#ff6c6c');

		// Color scheme "3" is used for the config screens for example/
		// It's dark text over gray background.
		this.set(JoplinStyleStringNames.BackgroundColor3, '#2E3138');
		this.set(JoplinStyleStringNames.BackgroundColorHover3, '#4E4E4E');
		this.set(JoplinStyleStringNames.MainTextColor3, '#dddddd');

		// Color scheme "4" is used for secondary-style buttons. It makes a white
		// button with blue text.
		this.set(JoplinStyleStringNames.BackgroundColor4, '#1D2024');
		this.set(JoplinStyleStringNames.MainTextColor4, '#789FE9');

		this.set(JoplinStyleStringNames.RaisedBackgroundColor, '#474747');
		this.set(JoplinStyleStringNames.RaisedTextColor, '#ffffff');
		this.set(JoplinStyleStringNames.SearchMarkerBackgroundColor, '#F7D26E');
		this.set(JoplinStyleStringNames.SearchMarkerTextColor, 'black');

		this.set(JoplinStyleStringNames.WarningBackgroundColor, '#CC6600');

		this.set(JoplinStyleStringNames.TableBackgroundColor, 'rgb(40, 41, 42)');
		this.set(JoplinStyleStringNames.CodeBackgroundColor, 'rgb(47, 48, 49)');
		this.set(JoplinStyleStringNames.CodeBorderColor, 'rgb(70, 70, 70)');
		this.set(JoplinStyleStringNames.CodeTextColor, '#ffffff');
	}


}
