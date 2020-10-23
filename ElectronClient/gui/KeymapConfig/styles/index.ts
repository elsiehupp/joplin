import JoplinStyleSheetNames from 'lib/themes/JoplinStyleSheetNames';

const { buildStyle } = require('lib/theme');

export default function styles(themeId: number) {
	return buildStyle(JoplinStyleSheetNames.KeyMapConfigScreen, themeId);
}
