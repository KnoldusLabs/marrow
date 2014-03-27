require('colors');

var express  = require("express");
var _        = require("underscore");
var config   = require('../config');
var app      = express();

require('./middleware')(app);
require('./backbone.nodejax');

_.each(require('../router').prototype.routes, function(method, path) {
	if (path[0] !== '/') path = '/' + path;

	app.get(path, function(req, res) {
		var params = _.values(req.params);

		var content = method.apply(this, params).then(function(result) {
			res.render('app', {
				content: result.content,
				seed: JSON.stringify(result.props)
			});
		}).catch(function(error) {
			console.error(error);
			res.send(500, error);
		});
	});
});

app.listen(config.PORT, function() {
	console.log("Such people. Much listening on %s at %s", (''+config.PORT).blue, (''+process.pid).magenta);
});
