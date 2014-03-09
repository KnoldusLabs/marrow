var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('default', function() {
		gulp.src('src/js/app.js')
			.pipe(browserify({
				insertGlobals : true,
				debug : !gulp.env.production
			}))
			.pipe(gulp.dest('./build/js'));
	// place code for your default task here
});
