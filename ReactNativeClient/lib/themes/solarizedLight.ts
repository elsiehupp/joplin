import LightTheme from './LightTheme';
import JoplinStyleStringNames from './JoplinStyleStringNames';

export default class SolarizedLight extends LightTheme {
	public constructor() {
		super();

		this.themeID = 'solarized-light';
		this.set('codeMirrorTheme', this.themeID);
		this.codeThemeCss = 'atom-one-light.css';

		this.set(JoplinStyleStringNames.BackgroundColor1, '#fdf6e3');
		this.set(JoplinStyleStringNames.BackgroundColorTransparent, 'rgba(253, 246, 227, 0.9)');
		this.set(JoplinStyleStringNames.OddBackgroundColor, '#eee8d5');
		this.set(JoplinStyleStringNames.MainTextColor1, '#657b83'); // For regular text
		this.set(JoplinStyleStringNames.ErrorTextColor1, '#dc322f');
		this.set(JoplinStyleStringNames.WarningTextColor, '#cb4b16');
		this.set(JoplinStyleStringNames.FadedTextColor1, '#839496'); // For less important text;
		this.set(JoplinStyleStringNames.BrightTextColor, '#073642'); // For important text;
		this.set(JoplinStyleStringNames.DividerColor, '#eee8d5');
		this.set(JoplinStyleStringNames.SelectedTextColor1, '#eee8d5');
		this.set(JoplinStyleStringNames.UrlTextColor, '#268bd2');

		this.set(JoplinStyleStringNames.BackgroundColor2, '#002b36');
		this.set(JoplinStyleStringNames.MainTextColor2, '#eee8d5');
		this.set(JoplinStyleStringNames.SelectedTextColor2, '#6c71c4');
		this.set(JoplinStyleStringNames.ErrorTextColor2, '#cb4b16');

		this.set(JoplinStyleStringNames.RaisedBackgroundColor, '#eee8d5');
		this.set(JoplinStyleStringNames.RaisedTextColor, '#073642');

		this.set(JoplinStyleStringNames.WarningBackgroundColor, '#b5890055');

		this.set(JoplinStyleStringNames.TableBackgroundColor, '#fdf6e3');
		this.set(JoplinStyleStringNames.CodeBackgroundColor, '#fdf6e3');
		this.set(JoplinStyleStringNames.CodeBorderColor, '#eee8d5');
		this.set(JoplinStyleStringNames.CodeTextColor, '#002b36');
	}
}
