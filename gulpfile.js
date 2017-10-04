var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var watch = require('gulp-watch');

gulp.task('css', function () {
	return gulp.src('./static/sass/*.sass')
		.pipe(sass())
		.pipe(minifyCss({compatibility: 'ie8'}))
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
