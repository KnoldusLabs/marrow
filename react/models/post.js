var Backbone = require('backbone');
var settings = require('../settings');

module.exports = Backbone.Model.extend({
	urlRoot: settings.api + '/posts'
});
