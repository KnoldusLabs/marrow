var Post = require('../models/post');
var Base = require('./base');

module.exports = Base.extend({
	model: Post,
	url: function() {
		return this.params.type? '/categories/' + this.params.type : '/posts';
	}
});

module.exports.id = 'Posts';
