import DarkTheme from './DarkTheme';
import { JoplinStyleStringNames } from './StyleProvider';

export default class Dracula extends DarkTheme {
	public constructor() {
		super();

		this.themeID = 'dracula';
		this.codeThemeCss = 'atom-one-dark-reasonable.css';

		this.set(JoplinStyleStringNames.BackgroundColor1, '#282a36');
		this.set(JoplinStyleStringNames.BackgroundColorTransparent, 'rgba(40, 42, 54, 0.9)');
		this.set(JoplinStyleStringNames.OddBackgroundColor, '#282a36');
		this.set(JoplinStyleStringNames.MainTextColor1, '#f8f8f2'); // For regular text
		this.set(JoplinStyleStringNames.ErrorTextColor1, '#ff5555');
		this.set(JoplinStyleStringNames.WarningTextColor, '#ffb86c');
		this.set(JoplinStyleStringNames.FadedTextColor1, '#6272a4'); // For less important text;
		this.set(JoplinStyleStringNames.BrightTextColor, '#50fa7b'); // For important text;
		this.set(JoplinStyleStringNames.DividerColor, '#bd93f9');
		this.set(JoplinStyleStringNames.SelectedTextColor1, '#44475a');
		this.set(JoplinStyleStringNames.UrlTextColor, '#8be9fd');

		this.set(JoplinStyleStringNames.BackgroundColor2, '#21222C');
		this.set(JoplinStyleStringNames.MainTextColor2, '#bd93f9');
		this.set(JoplinStyleStringNames.SelectedTextColor2, '#44475a');
		this.set(JoplinStyleStringNames.ErrorTextColor2, '#ff5555');

		this.set(JoplinStyleStringNames.RaisedBackgroundColor, '#44475a');
		this.set(JoplinStyleStringNames.RaisedTextColor, '#bd93f9');

		this.set(JoplinStyleStringNames.WarningBackgroundColor, '#ffb86c');

		this.set(JoplinStyleStringNames.TableBackgroundColor, '#6272a4');
		this.set(JoplinStyleStringNames.CodeBackgroundColor, '#44475a');
		this.set(JoplinStyleStringNames.CodeBorderColor, '#f8f8f2');
		this.set(JoplinStyleStringNames.CodeTextColor, '#50fa7b');

		return this;
	}
}
