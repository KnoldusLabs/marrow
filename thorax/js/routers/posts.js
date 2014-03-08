define([
	'backbone',
	'models/post',
	'collections/posts',
	'views/root',
	'views/posts/index',
	'views/posts/show'
], function (Backbone, Post, Posts, RootView, IndexView, ShowView) {
	return Backbone.Router.extend({
		routes: {
			'' : 'index',
			'posts/:slug' : 'show'
		},

		index: function() {
			var view  = new IndexView({
				collection: new Posts()
			});

			RootView.getInstance().setView(view);
		},

		show: function(id) {
			var view = new ShowView({
				model: new Post({ id: id })
			});

			RootView.getInstance().setView(view);
		}
	});
});
