import StyleContext from './themes/StyleContext';

let styleContext:StyleContext;

function themeStyle(propertyName:any) {
	if (!styleContext) styleContext = new StyleContext();
	return styleContext.getProperty(propertyName);
}

function buildStyle(cacheKey:any, themeId:any, callback:any) {
	if (!styleContext) styleContext = new StyleContext();
	return styleContext.buildStyle(cacheKey, themeId, callback);
}

export { themeStyle, buildStyle };
