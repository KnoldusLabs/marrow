var express = require('express');
var _ = require('lodash');
var fs = require('fs');
var data = require("./data");
var markdown = require('markdown').markdown;

var app = express();

data.forEach(function(post) {
	fs.readFile(post.source, function(err, content) {
		if (err) throw err;
		post.content = markdown.toHTML(content.toString());
	});
});

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
};

app.configure(function() {
	app.use(allowCrossDomain);
	app.use(app.router);
});

app.get('/', function(req, res){
	res.send('This is the Marrow API. Welcome');
});

app.get('/posts', function(req, res) {
	console.log("GET: /posts");
	res.json(data);
});

app.get('/posts/:id', function(req, res) {
	var id = req.params.id;
	var post = _.findWhere(data, { id: +id });

	console.log("GET: /posts/%s", id);
	res.json(post);
});

app.get('/categories/:id', function(req, res) {
	var type = req.params.id;
	var posts = _.filter(data, function(d) {
		return d.categories.indexOf(type) > -1;
	});

	console.log("GET: /categories/%s", type);

	res.json(posts);
});

app.listen(1337, function() {
	console.log("Marrow API listening on 1337");
});
