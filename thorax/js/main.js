require([
	'jquery',
	'backbone',
	'views/root',
	'views/header',
	'routers/posts',
	'routers/categories',
	'helpers'
], function ($, Backbone, RootView, HeaderView, PostsRouter, CatsRouter) {
	$(function() {
		Backbone.history.start({
			pushState: true,
			root: '/',
			silent: true
		});

		RootView.getInstance("#region-main");
		HeaderView.getInstance("#region-header");

		var posts = new PostsRouter();
		var cats  = new CatsRouter();

		Backbone.history.loadUrl();
	});
});
