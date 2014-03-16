module.exports = {
	index: function(params, callback) {
		this.app.fetch({
			collection: { collection: 'Posts', params: params }
		}, callback);
	},

	show: function(params, callback) {
		this.app.fetch({
			model: { model: 'Post', params: params }
		}, callback);
	}
};
