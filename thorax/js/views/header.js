define([
	'underscore',
	'view',
	'hbs!templates/header'
], function(_, View, headerTemplate) {
	var HeaderView = View.extend({
		name: 'header',
		template: headerTemplate
	});

	HeaderView.getInstance = _.once(function(target) {
		var instance = new HeaderView();

		instance.appendTo(target || document.body);

		return instance;
	});

	return HeaderView;
});
