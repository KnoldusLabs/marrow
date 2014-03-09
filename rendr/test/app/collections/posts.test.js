var Posts = require('../../../app/collections/posts');

describe('Posts', function() {

	it ('should have a default url if params.user is not specified', function() {
		var posts = new Posts();
		posts.url().should.equal('/posts');
	});

});
