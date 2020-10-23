import JoplinStyleSheetNames from './themes/JoplinStyleSheetNames';
import StyleContext from './themes/StyleContext';

let styleContext:StyleContext;

function themeStyle(propertyName:any) {
	if (!styleContext) styleContext = new StyleContext();
	return styleContext.getProperty(propertyName);
}

function buildStyle(electronStyleClass:JoplinStyleSheetNames, themeId:any) {
	if (!styleContext) styleContext = new StyleContext();
	return styleContext.buildStyle(electronStyleClass, themeId);
}

export { themeStyle, buildStyle };
