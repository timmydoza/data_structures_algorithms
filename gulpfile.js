var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['index.js', 'lib/**/*.js'];
var testFiles = ['test/**/*.js'];

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
    .pipe(jshint({
        node: true,
        globals: {
            describe: true,
            it: true
        }
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function(){
  return gulp.src(appFiles)
    .pipe(jshint({
        node: true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha', ['jshint'], function(){
  return gulp.src(testFiles, {read: false})
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('jshint', ['jshint:app', 'jshint:app']);
gulp.task('default', ['jshint', 'mocha']);