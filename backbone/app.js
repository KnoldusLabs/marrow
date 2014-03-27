var app = require('express')();
var Backbone = require('./vendor/backbone');

app.get('/', function() {
	res.end('hi');
});

app.listen(8000);
