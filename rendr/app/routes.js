module.exports = function(match) {
	match('/',                  'posts#index');
	match('/posts/:id',         'posts#show');
	match('/categories/:type',  'categories#show');
};
