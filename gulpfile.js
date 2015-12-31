/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp'),
    gutil = require('gutil'),
    wrench = require('wrench'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    coffee = require('gulp-coffee');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['.', '.tmp']
  });
});

gulp.task('livereload', function() {
  gulp.src(['.tmp/styles/*.css', '.tmp/scripts/*.js'])
    .pipe(watch())
    .pipe(connect.reload());
});

gulp.task('less', function() {
  gulp.src('styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('coffee', function() {
  gulp.src('scripts/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('watch', function() {
  gulp.watch('styles/*.less', ['less']);
  gulp.watch('scripts/*.coffee', ['coffee']);
})

gulp.task('default', ['less', 'coffee', 'webserver', 'livereload', 'watch']);
