var React     = require('react');
var isBrowser = typeof window !== 'undefined';
var Promise   = require('es6-promise').Promise;

module.exports = function(component, region) {
	return new Promise(function(resolve, reject) {
		if (isBrowser) {
			resolve(React.renderComponent(component, document.getElementById(region)));
		} else {
			resolve({
				content: React.renderComponentToString(component),
				props: component.props
			});
		}
	});
};
