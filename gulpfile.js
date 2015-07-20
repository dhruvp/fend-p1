var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');

var paths = {
	less: '*/**.less'
};

gulp.task('less', function () {
	return gulp.src(paths.less)
	.pipe(less())
	.pipe(concat('app.css'))
	.pipe(gulp.dest('public/dist/'));
});

gulp.task('build', ['less']);


gulp.task('watch', function () {
	return gulp.watch([paths.less], ['less']);
});

gulp.task('default', ['build', 'watch']);
