var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gutil.log('Environment', gutil.colors.blue(gulp.env.production ? 'Production' : 'Development'));

gulp.task('scripts', function() {
	gulp.src('./application.js', { read: false })
		.pipe(browserify({
			insertGlobals : false,
			transform: ['reactify'],
			extensions: ['.jsx'],
			debug : false
		}))
		.on('error', function(error) {
			console.log(error);
		})
		.pipe(rename('client.js'))
		.pipe(gulp.dest('./assets'))
		.pipe(rename('client.min.js'))
		.pipe(uglify({
			mangle: {
				except: ['require', 'export', '$super']
			}
		}))
		.pipe(gulp.dest('./assets'));
});

gulp.task('default', function() {
	gulp.run(['styles']);

	gulp.watch([
		'**/*.js',
		'**/*.jsx',
		'!client/public/**/*.js',
		'!node_modules/**/*.js'
	], function(evt) {
		gulp.run('scripts');
	});
});

gulp.task('public', ['scripts']);
