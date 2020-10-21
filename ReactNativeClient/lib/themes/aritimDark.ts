import DarkTheme from './DarkTheme';
import { JoplinStyleStringNames } from './StyleProvider';

export default class AritimDark extends DarkTheme {
	public constructor() {
		super();

		this.themeID, 'monokai';
		this.codeThemeCss, 'atom-one-dark-reasonable.css';

		this.set(JoplinStyleStringNames.BackgroundColor1, '#10151a'); // Main background color
		this.set(JoplinStyleStringNames.BackgroundColorTransparent, 'rgba(16, 21, 26, 0.9)'); //
		this.set(JoplinStyleStringNames.OddBackgroundColor, '#141a21');
		this.set(JoplinStyleStringNames.MainTextColor1, '#d3dae3'); // For regular text (everything except notebooks)
		this.set(JoplinStyleStringNames.ErrorTextColor1, '#9a2f2f');
		this.set(JoplinStyleStringNames.WarningTextColor, '#d66500');
		this.set(JoplinStyleStringNames.FadedTextColor1, '#666a73'); // For less important text (e.g. not selected menu in settings)
		this.set(JoplinStyleStringNames.BrightTextColor, '#d3dae3'); // For important text; (e.g. bold)
		this.set(JoplinStyleStringNames.DividerColor, '#141a21'); // Borders, I wish I could remove them
		this.set(JoplinStyleStringNames.SelectedTextColor1, '#2b5278'); // Selected note
		this.set(JoplinStyleStringNames.UrlTextColor, '#356693'); // Links to external sites (e.g. in settings)

		this.set(JoplinStyleStringNames.BackgroundColor2, '#141a21'); // Notebooks main background
		this.set(JoplinStyleStringNames.MainTextColor2, '#d3dae3'); // Notebook sidebar text color
		this.set(JoplinStyleStringNames.SelectedTextColor2, '#10151a'); // Selected notebook (or settings icon in settings)
		this.set(JoplinStyleStringNames.ErrorTextColor2, '#9a2f2f');

		this.set(JoplinStyleStringNames.RaisedBackgroundColor, '#2b5278'); // Table, hover
		this.set(JoplinStyleStringNames.RaisedTextColor, '#141a21');

		this.set(JoplinStyleStringNames.WarningBackgroundColor, '#9a2f2f'); // Info / Warning boxes bg color

		this.set(JoplinStyleStringNames.TableBackgroundColor, '#141a21'); // Table (even) background color
		this.set(JoplinStyleStringNames.CodeBackgroundColor, '#141a21'); // Single line code bg
		this.set(JoplinStyleStringNames.CodeBorderColor, '#141a21'); // Single line code border, and tables
		this.set(JoplinStyleStringNames.CodeTextColor, '#005b47'); // Single line code text

		this.set(JoplinStyleStringNames.HighlightedTextColor, '#d3dae3');

		return this;
	}

}
