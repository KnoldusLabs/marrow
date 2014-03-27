var Backbone = require('backbone');
var Posts = require('./controllers/posts');

module.exports = Backbone.Router.extend({
	routes : {
		''          : Posts.index,
		'posts/:id' : Posts.show
	}
});
