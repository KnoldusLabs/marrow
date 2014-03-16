//
// Routes file that exports route handlers for ease of testing.
//

var Post = require('../../models/post');
var Posts = require('../../collections/posts');

exports.index = function(req, res, next) {
	var posts = new Posts();

	posts.fetch({
		success: function() {
			res.locals.sd.POSTS = posts.toJSON();
			res.render('index', {
				models: posts.toJSON()
			});
		},
		error: function(m, err) { next(err.text); }
	});
};

exports.show = function(req, res, next) {
	var post = new Post({ id: req.params.id });

	post.fetch({
		success: function() {
			res.locals.sd.POSTS = post.toJSON();
			res.render('show', post.toJSON());
		},
		error: function(m, err) { next(err.text); }
	});
};
