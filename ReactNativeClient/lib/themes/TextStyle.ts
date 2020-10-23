export default class CssClass {
	public color: string;
	public cursor: string;
	public fontFamily: string;
	public fontSize: number;
	public fontWeight: string;
	public lineHeight: any;
	public margin: any;
	public marginTop: number;
	public marginBottom: number;
	public marginRight: number;
	public marginLeft: number;
	public textDecoration: string;
	public userSelect: string;
	public whiteSpace: string;

	public constructor() {
		this.color = '';
		this.cursor = '';
		this.fontFamily = '';
		this.fontSize = null;
		this.fontWeight = '';
		this.lineHeight = null;
		this.margin = null;
		this.marginTop = null;
		this.marginBottom = null;
		this.marginRight = null;
		this.marginLeft = null;
		this.textDecoration = '';
		this.userSelect = '';
		this.whiteSpace = '';
		return this;
	}

	public copy(copy:CssClass) {
		this.color = copy.color;
		this.cursor = copy.cursor;
		this.fontFamily = copy.fontFamily;
		this.fontSize = copy.fontSize;
		this.fontWeight = copy.fontWeight;
		this.lineHeight = copy.lineHeight;
		this.margin = copy.margin;
		this.marginTop = copy.marginTop;
		this.marginBottom = copy.marginBottom;
		this.marginRight = copy.marginRight;
		this.marginLeft = copy.marginLeft;
		this.textDecoration = copy.textDecoration;
		this.userSelect = copy.userSelect;
		this.whiteSpace = copy.whiteSpace;
	}
}
