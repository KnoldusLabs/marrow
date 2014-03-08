define([
	'underscore',
	'layout-view',
	'hbs!templates/root'
], function(_, LayoutView, rootTemplate) {
	var RootView = LayoutView.extend({
		name: 'root',
		template: rootTemplate
	});

	RootView.getInstance = _.once(function(target) {
		var instance = new RootView();

		instance.appendTo(target || document.body);

		return instance;
	});

	return RootView;
});
