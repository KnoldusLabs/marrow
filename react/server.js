var path        = require('path');
var url         = require('url');
var express     = require('express');
var browserify  = require('connect-browserify');
var ReactAsync  = require('react-async');
var nodejsx     = require('node-jsx').install();

var app = express();

app.get('/assets/bundle.js', browserify('./client', {
	debug: true,
	watch: true
}));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(function(req, res) {
	var path = url.parse(req.url).pathname;
	var app = require('./client')({ path: path });

	ReactAsync.renderComponentToStringWithAsyncState(app, function(err, markup) {
		if (err) return next(err);
		res.send(markup);
	});
});

app.listen(3000, function() {
	console.log('Marrow:React is listening on port 3000');
});
