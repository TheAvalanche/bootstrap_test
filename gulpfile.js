var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var del = require('del');
var fileinclude = require('gulp-file-include');
var npmDist = require('gulp-npm-dist');

gulp.task('hello-world', function() {
  console.log("Hello, world!");
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
             .pipe(fileinclude({prefix: '@@', basepath: '@file'}))
             .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
});

gulp.task('styles', function() {
  return gulp.src('src/styles/scss/main.scss')
             .pipe(sass())
             .pipe(rename({suffix: '.min'}))
             .pipe(cssnano())
             .pipe(gulp.dest('dist/styles'))
});

gulp.task('scripts', ['vendorScripts'], function() {
  return gulp.src('src/scripts/**/*.js')
          .pipe(gulp.dest('dist/scripts'));
});

gulp.task('vendorScripts', function() {
	gulp.src(npmDist({
		excludes: ['css/**/*']
	}), {base:'./node_modules'})
		.pipe(gulp.dest('dist/scripts/vendor'));
});

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('default', ['clean'], function() {
  gulp.start('html', 'styles', 'scripts');
});
