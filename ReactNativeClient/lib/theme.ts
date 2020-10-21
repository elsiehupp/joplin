import StyleContext from './themes/StyleContext';

const styleContext = new StyleContext();

function themeStyle(propertyName:any) {
	return styleContext.getProperty(propertyName);
}

function buildStyle(cacheKey:any, themeId:any, callback:any) {
	return styleContext.buildStyleProvider(cacheKey, themeId, callback);
}

export { themeStyle, buildStyle };
