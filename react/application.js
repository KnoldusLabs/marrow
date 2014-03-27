var Backbone = require('backbone');
var React    = require('react');
var Router   = require('./router');

Backbone.$   = require('jquery');

Backbone.history.start({
	pushState: true,
	root: '/',
	silent: true
});

var router = new Router();

Backbone.history.loadUrl();
