import JoplinStyleSheetNames from 'lib/themes/JoplinStyleSheetNames';
import { NoteBodyEditorProps } from '../../../utils/types';
const { buildStyle } = require('lib/theme');

export default function styles(props:NoteBodyEditorProps) {
	return buildStyle(JoplinStyleSheetNames.TinyMCE, props);
}
