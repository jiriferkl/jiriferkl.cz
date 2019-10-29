var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var watch = require('gulp-watch');

gulp.task('css', function () {
	return gulp.src('./static/sass/*.sass')
		.pipe(sass())
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(concat('dist.css'))
		.pipe(gulp.dest('./static/dist'));
});

gulp.task('js', function () {
	return gulp.src('./static/js/*.js')
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('./static/dist'));
});

gulp.task('watch', function () {
	gulp.watch(['./static/sass/*.sass'], ['css']);
	gulp.watch(['./static/js/*.js'], ['js']);
});
