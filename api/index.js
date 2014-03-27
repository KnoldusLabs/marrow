var express  = require('express');
var app      = express();
var config   = require('./config');
var db       = require('./database');

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
};

app.configure(function() {
	app.use(allowCrossDomain);
	app.use(app.router);
	app.use(express.logger('dev'));
});

app.get('/', function(req, res) {
	res.end('This is the Marrow API. Welcome');
});

app.get('/posts', function(req, res) {
	console.log("GET: /posts");

	db.Post.findAll()
		.success(function(d) { res.json(d); })
		.error(function(e)   { res.end(e);  });
});

app.get('/posts/:id', function(req, res) {
	var id = req.params.id;

	console.log("GET: /posts/%s", id);

	db.Post.find(id)
		.success(function(d) { res.json(d);  })
		.error(function(err) { res.end(err); });
});

app.get('/categories/:id', function(req, res) {
	var id = req.params.id;

	console.log("GET: /categories/%s", id);

	db.Category.find(id)
		.success(function(d) { res.json(d);  })
		.error(function(err) { res.end(err); });
});

app.listen(config.PORT, function() {
	console.log("Marrow API listening on %s", config.PORT);
});
