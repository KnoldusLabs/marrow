var app = require('express')();

require('lib/overrides');

var Backbone = require('./vendor/backbone');

app.get('/', function(req, res) {
	res.end('hi');
});

app.listen(8000);
