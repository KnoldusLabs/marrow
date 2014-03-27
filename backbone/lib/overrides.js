var Handlebars = require('handlebars');

module.exports = require('thorax').View.extend({
	tagName: 'div',
	className: 'hay',
	template: Handlebars.compile('yo, whats up?')
});
