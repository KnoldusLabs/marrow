//
// The express app for the "commits" app.
//
// Simply exports the express instance to be mounted into the project,
// and loads the routes.
//

var express = require('express'),
    exphbs  = require('express3-handlebars'),
    routes = require('./routes');

var Handlebars = require('handlebars');

var app = module.exports = express();

app.engine('handlebars', exphbs({
	layoutsDir: __dirname + '/templates/layouts',
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/templates');

app.get('/', routes.index);
app.get('/posts/:id', routes.show);
