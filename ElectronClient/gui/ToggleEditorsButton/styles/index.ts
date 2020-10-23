import JoplinStyleSheetNames from 'lib/themes/JoplinStyleSheetNames';
import { Props } from '../ToggleEditorsButton';
const { buildStyle } = require('lib/theme');

export default function styles(props:Props) {
	return buildStyle(JoplinStyleSheetNames.ToggleEditorsButton, props);
}
