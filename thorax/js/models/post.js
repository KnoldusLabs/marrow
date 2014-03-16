define(['model'], function (Model) {
	return Model.extend({
		urlRoot: 'http://192.168.8.173:1337/posts',
		name: 'post'
	});
});
