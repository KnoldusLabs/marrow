define(['model'], function (Model) {
	return Model.extend({
		urlRoot: 'http://localhost:1337/posts',
		name: 'post'
	});
});
