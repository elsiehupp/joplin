import DarkTheme from './DarkTheme';
import JoplinStyleStringNames from './JoplinStyleStringNames';

export default class OledDark extends DarkTheme {
	public constructor() {
		super();

		this.themeID = 'oled-dark';
		this.set('codeMirrorTheme', this.themeID);
		this.codeThemeCss = 'atom-one-dark-reasonable.css';

		this.set(JoplinStyleStringNames.BackgroundColor1, '#000000');
		this.set(JoplinStyleStringNames.MainTextColor1, '#dddddd');
		this.set(JoplinStyleStringNames.FadedTextColor1, '#777777');
		this.set(JoplinStyleStringNames.DividerColor, '#3D444E');
		this.set(JoplinStyleStringNames.SelectedTextColor1, '#333333');
		this.set(JoplinStyleStringNames.UrlTextColor, 'rgb(166,166,255)');
		this.set(JoplinStyleStringNames.CodeTextColor, '#ffffff');
		this.set(JoplinStyleStringNames.RaisedBackgroundColor, '#0F2051');
		this.set(JoplinStyleStringNames.RaisedTextColor, '#788BC3');
		this.set(JoplinStyleStringNames.TableBackgroundColor, 'rgb(0, 0, 0)');
		this.set(JoplinStyleStringNames.CodeBackgroundColor, 'rgb(47, 48, 49)');
		this.set(JoplinStyleStringNames.CodeBorderColor, 'rgb(70, 70, 70)');
		this.set(JoplinStyleStringNames.BrightTextColor, 'rgb(220,220,220)');

		return this;
	}
}
