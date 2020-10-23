import DarkTheme from './DarkTheme';
import JoplinStyleStringNames from './JoplinStyleStringNames';

export default class SolarizedDark extends DarkTheme {
	public constructor() {
		super();

		this.themeID = 'solarized-dark';
		this.set('codeMirrorTheme', this.themeID);
		this.codeThemeCss = 'atom-one-dark-reasonable.css';

		this.set(JoplinStyleStringNames.BackgroundColor1, '#002b36');
		this.set(JoplinStyleStringNames.BackgroundColorTransparent,'rgba(0, 43, 54, 0.9)');
		this.set(JoplinStyleStringNames.OddBackgroundColor, '#073642');
		this.set(JoplinStyleStringNames.MainTextColor1, '#93a1a1'); // For regular text
		this.set(JoplinStyleStringNames.ErrorTextColor1, '#dc322f');
		this.set(JoplinStyleStringNames.WarningTextColor, '#cb4b16');
		this.set(JoplinStyleStringNames.FadedTextColor1, '#657b83'); // For less important text;
		this.set(JoplinStyleStringNames.BrightTextColor, '#eee8d5'); // For important text;
		this.set(JoplinStyleStringNames.DividerColor, '#586e75');
		this.set(JoplinStyleStringNames.SelectedTextColor1, '#073642');
		this.set(JoplinStyleStringNames.UrlTextColor, '#268bd2');

		this.set(JoplinStyleStringNames.BackgroundColor2, '#073642');
		this.set(JoplinStyleStringNames.MainTextColor2, '#eee8d5');
		this.set(JoplinStyleStringNames.SelectedTextColor2, '#6c71c4');
		this.set(JoplinStyleStringNames.ErrorTextColor2, '#cb4b16');

		this.set(JoplinStyleStringNames.RaisedBackgroundColor, '#073642');
		this.set(JoplinStyleStringNames.RaisedTextColor, '#839496');

		this.set(JoplinStyleStringNames.WarningBackgroundColor, '#b5890055');

		this.set(JoplinStyleStringNames.TableBackgroundColor, '#002b36');
		this.set(JoplinStyleStringNames.CodeBackgroundColor, '#002b36');
		this.set(JoplinStyleStringNames.CodeBorderColor, '#696969');
		this.set(JoplinStyleStringNames.CodeTextColor, '#fdf6e3');
	}
}
