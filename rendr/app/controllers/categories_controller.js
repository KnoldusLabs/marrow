module.exports = {
	show: function(params, callback) {
		this.app.fetch({
			collection: { collection: 'Posts', params: params }
		}, callback);
	}
};
