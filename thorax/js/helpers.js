define(['handlebars', 'thorax'], function (Handlebars) {
	Handlebars.registerHelper('pretty-date', function (value) {
		var date = new Date(value);
		var string = [date.getMonth(), date.getDate(), date.getFullYear()].join('/');
		return new Handlebars.SafeString(string);
	});

	Handlebars.registerViewHelper('on', function (eventName, helperView) {
		helperView.parent.on(eventName, function() {
			helperView.render();
		});
	});
});
