module.exports = function(Handlebars) {
	return {
		copyright: function(year) {
			return new Handlebars.SafeString("&copy;" + year);
		},
		'pretty-date': function(value) {
			var date = new Date(value);
			var string = [date.getMonth(), date.getDate(), date.getFullYear()].join('/');

			return new Handlebars.SafeString(string);
		}
	};
};
