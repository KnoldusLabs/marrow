define([
	'collection'
], function (Collection) {
	return Collection.extend({
		url: 'http://192.168.8.173:1337/posts',
		name: 'posts',
		comparator: 'date'
	});
});
