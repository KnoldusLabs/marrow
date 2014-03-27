var Post      = require('../models/post');
var Posts     = require('../collections/posts');

var IndexView = require('../components/posts/index.jsx');
var ShowView  = require('../components/posts/show.jsx');

var render = require('../lib/render');

module.exports = {
	index: function() {
		var posts = new Posts();

		return posts.fetch().then(function(data) {
			return render(IndexView({ items: data }), 'app');
		});
	},

	show: function(id) {
		var post = new Post({ id: id });

		return post.fetch().then(function(data) {
			return render(ShowView(data), 'app');
		});
	}
};
