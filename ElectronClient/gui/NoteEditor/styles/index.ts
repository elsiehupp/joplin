import JoplinStyleSheetNames from 'lib/themes/JoplinStyleSheetNames';
import { NoteEditorProps } from '../utils/types';

const { buildStyle } = require('lib/theme');

export default function styles(props: NoteEditorProps) {
	return buildStyle(JoplinStyleSheetNames.NoteEditorBody, props);
}
