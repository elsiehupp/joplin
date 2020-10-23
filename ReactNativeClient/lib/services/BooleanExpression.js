'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const contextkey_1 = require('./contextkey/contextkey');
class BooleanExpression {
	constructor(expression) {
		this.rules_ = null;
		this.expression_ = expression;
	}
	createContext(ctx) {
		return {
			getValue: (key) => {
				return ctx[key];
			},
		};
	}
	get rules() {
		if (!this.rules_) {
			this.rules_ = contextkey_1.ContextKeyExpr.deserialize(this.expression_);
		}
		return this.rules_;
	}
	evaluate(context) {
		return this.rules.evaluate(this.createContext(context));
	}
}
exports.default = BooleanExpression;
// # sourceMappingURL=BooleanExpression.js.map
