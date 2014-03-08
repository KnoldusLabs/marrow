var grunt = require('grunt');

module.exports = {
	production: {
		options: {
			baseUrl: 'tmp',
			name: '../bower_components/almond/almond',
			include: ['main'],
			stubModules: ['text', 'hbars'],
			out: 'dist/main.js',
			removeCombined: true,
			findNestedDependencies: true,
			optimize: 'uglify2',
			paths: {
				'zepto': '../bower_components/zepto/zepto',
				'underscore': '../bower_components/underscore/underscore',
				'handlebars': '../bower_components/handlebars/handlebars',
				'backbone': '../bower_components/backbone/backbone',
				'thorax': '../bower_components/thorax/thorax',
				'text': '../bower_components/text/text',
				'hbs': '../bower_components/requirejs-hbs/hbs'
			},

			onBuildWrite : function(moduleName, path, content){
				if (moduleName === 'handlebars') {
					path = path.replace('handlebars.js','handlebars.runtime.js');
					content = require('fs').readFileSync(path).toString();
					content = content.replace(/(define\()(function)/, '$1"handlebars", $2');
				}
				return content;
			},
			shim: {
				'handlebars': {
					exports: 'Handlebars'
				},
				'backbone': {
					exports: 'Backbone',
					deps: ['zepto', 'underscore']
				},
				'underscore': {
					exports: '_'
				},
				'thorax': {
					exports: 'Thorax',
					deps: ['handlebars', 'backbone']
				},
				'zepto': {
					exports: '$'
				}
			}
		}
	}
};
