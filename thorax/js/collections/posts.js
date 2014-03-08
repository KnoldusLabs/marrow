define([
	'collection'
], function (Collection) {
	return Collection.extend({
		url: 'http://localhost:1337/posts',
		name: 'posts',
		comparator: 'date'
	});
});
