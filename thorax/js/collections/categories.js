define([
	'collection'
], function (Collection) {
	return Collection.extend({
		name: 'categories',
		comparator: 'date',
		url: function() {
			return 'http://localhost:1337/categories/' + this.where;
		}
	});
});
