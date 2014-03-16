var config = require('../config');
var sample = require('./sample');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('marrow_' + config.NODE_ENV, null, null, {
	dialect: "postgres",
	port:    5432
});

var models = module.exports = {};

sequelize.authenticate().complete(function(err) {
	if (!!err) {
		console.log('Unable to connect to the database:', err);
	} else {
		console.log('Connection has been established successfully.');
	}
});

var Post = models.Post = sequelize.define('Post', {
	title     : Sequelize.STRING,
	content   : Sequelize.TEXT,
	date      : Sequelize.DATE,
	published : Sequelize.BOOLEAN
});

var Category = models.Category = sequelize.define('Category', {
	name : Sequelize.STRING
});

sequelize.sync({ force: true }).complete(function(err) {
	if (!!err) {
		return console.log('An error occurred while create the table:', err);
	}

	sample.forEach(function(record) {
		Post.create({
			title: record.title,
			content: require('fs').readFileSync(record.source).toString(),
			date: record.date,
			published: record.published
		}).complete(function(err) {
			if (!!err) {
				console.log("ERROR:", err);
			} else {
				console.log("Saved %s", record.title);
			}
		});
	});
});
