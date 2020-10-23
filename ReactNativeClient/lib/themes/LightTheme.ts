import DefaultTheme from './DefaultTheme';
import { JoplinStyleStringNames, StyleColorAppearance } from './StyleProvider';

// This is the default theme in Joplin
export default class LightTheme extends DefaultTheme {
	public constructor() {
		super();

		this.appearance = StyleColorAppearance.Light;
		this.themeID = 'light';
		this.codeThemeCss = 'atom-one-light.css';

		// Color scheme "1" is the basic one, like used to display the note
		// content. It's basically dark gray text on white background
		this.set(JoplinStyleStringNames.BackgroundColor1, '#ffffff');
		this.set(JoplinStyleStringNames.BackgroundColorTransparent, 'rgba(255,255,255,0.9)');
		this.set(JoplinStyleStringNames.OddBackgroundColor, '#dddddd');
		this.set(JoplinStyleStringNames.MainTextColor1, '#32373F'); // For regular text
		this.set(JoplinStyleStringNames.ErrorTextColor1, 'red');
		this.set(JoplinStyleStringNames.WarningTextColor, '#9A5B00');
		this.set(JoplinStyleStringNames.FadedTextColor1, '#7C8B9E'); // For less important text
		this.set(JoplinStyleStringNames.BrightTextColor, '#000000'); // For important text
		this.set(JoplinStyleStringNames.DividerColor, '#dddddd');
		this.set(JoplinStyleStringNames.SelectedTextColor1, '#e5e5e5');
		this.set(JoplinStyleStringNames.UrlTextColor, '#155BDA');

		// Color scheme "2" is used for the sidebar. It's white text over
		// dark blue background.
		this.set(JoplinStyleStringNames.BackgroundColor2, '#313640');
		this.set(JoplinStyleStringNames.MainTextColor2, '#ffffff');
		this.set(JoplinStyleStringNames.SelectedTextColor2, '#131313');
		this.set(JoplinStyleStringNames.ErrorTextColor2, '#ff6c6c');

		// Color scheme "3" is used for the config screens for example/
		// It's dark text over gray background.
		this.set(JoplinStyleStringNames.BackgroundColor3, '#F4F5F6');
		this.set(JoplinStyleStringNames.BackgroundColorHover3, '#CBDAF1');
		this.set(JoplinStyleStringNames.MainTextColor3, '#738598');

		// Color scheme "4" is used for secondary-style buttons. It makes a white
		// button with blue text.
		this.set(JoplinStyleStringNames.BackgroundColor4, '#ffffff');
		this.set(JoplinStyleStringNames.MainTextColor4, '#2D6BDC');

		this.set(JoplinStyleStringNames.RaisedBackgroundColor, '#e5e5e5');
		this.set(JoplinStyleStringNames.RaisedTextColor, '#222222');
		this.set(JoplinStyleStringNames.SearchMarkerBackgroundColor, '#F7D26E');
		this.set(JoplinStyleStringNames.SearchMarkerTextColor, 'black');

		this.set(JoplinStyleStringNames.WarningBackgroundColor, '#FFD08D');

		this.set(JoplinStyleStringNames.TableBackgroundColor, 'rgb(247, 247, 247)');
		this.set(JoplinStyleStringNames.CodeBackgroundColor, 'rgb(243, 243, 243)');
		this.set(JoplinStyleStringNames.CodeBorderColor, 'rgb(220, 220, 220)');
		this.set(JoplinStyleStringNames.CodeTextColor, 'rgb(0,0,0)');


		this.InitializeGlobalStyles();
		this.InitializeOtherStyles();
	}

}
