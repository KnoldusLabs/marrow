//
// The client-side code for the commits page.
//
// [Browserify](https://github.com/substack/node-browserify) lets us write this
// code as a common.js module, which means requiring dependecies instead of
// relying on globals. This module exports the Backbone view and an init
// function that gets used in /assets/commits.js. Doing this allows us to
// easily unit test these components, and makes the code more modular and
// composable in general.
//

var Backbone = require('backbone'),
    $ = require('jquery'),
    sd = require('sharify').data,
    Posts = require('../../collections/posts.js'),
    indexTemplate = function() {
	    return require('./templates/index.handlebars').apply(null, arguments);
    };

Backbone.$ = $;

module.exports.CommitsView = CommitsView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('sync', this.render, this);
	},

	render: function() {
		this.$('#commits-list').html(indexTemplate({ models: this.collection.toJSON() }));
	},

	events: {
		'change .search-input': 'changeRepo'
	},

	changeRepo: function(e) {
		this.collection.repo = $(e.target).val();
		this.collection.fetch();
	}
});

module.exports.init = function() {
	return new CommitsView({
		el: $('body'),
		collection: new Posts(sd.POSTS)
	});
};
