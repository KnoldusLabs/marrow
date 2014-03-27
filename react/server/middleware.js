var express = require('express');
var exphbs  = require('express3-handlebars');
var nodejsx = require('node-jsx').install({ extension: '.jsx' });

module.exports = function(app) {
	app.use(express.compress());
	app.use(express.static(__dirname + '/../assets'));

	app.use(function(req, res, next) {
		console.log("SERVER".blue, req.method.grey, req.url.green);
		next();
	});

	app.engine('handlebars', exphbs());
	app.set('view engine', 'handlebars');
	app.set('views', __dirname + '/views');
	app.locals.layout = false;
};
