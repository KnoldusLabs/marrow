define([
	'collection'
], function (Collection) {
	return Collection.extend({
		name: 'categories',
		comparator: 'date',
		url: function() {
			return 'http://192.168.8.173:1337/categories/' + this.where;
		}
	});
});
