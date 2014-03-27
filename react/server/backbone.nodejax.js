var config = require('../config'),
    settings = require('../settings'),
    _ = require('underscore'),
    url = require('url'),
    Promise = require('es6-promise').Promise,
    request = require('request');

require('backbone').ajax = function(options) {
	_.extend(options, {
		json : true,
		url  : url.resolve(settings.api, options.url)
	});

	return new Promise(function(resolve, reject) {
		request(options, function(error, result) {
			if (error) {
				if (_.has(options, 'failure')) options.failure(error);
				reject(new Error(error));
			} else {
				if (_.has(options, 'success')) options.success(result.body);
				resolve(result.body, result);
			}
		});
	});
};
