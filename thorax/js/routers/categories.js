define([
	'backbone',
	'collections/categories',
	'views/root',
	'views/posts/index'
], function (Backbone, Categories, RootView, IndexView) {
	return Backbone.Router.extend({
		routes: {
			'categories/:slug' : 'show'
		},

		show: function(type) {
			var posts = new Categories();
			posts.where = type;

			var view = new IndexView({ collection: posts });

			RootView.getInstance().setView(view);
		}
	});
});
