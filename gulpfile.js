var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

//create a default task
gulp.task('default', ['copy-modules', 'build-js', 'build-css'], function(){
    gutil.log('Gulp ran.');
});

//copy bootstrap files from node modules
gulp.task('copy-modules', function(){
    return gulp.src('node_modules/bootstrap/dist/**/*')
        .pipe(gulp.dest('public/vendors/bootstrap'))
});

//build and uglify js files
gulp.task('build-js', function(){
   return gulp.src('client/javascripts/*.js')
       .pipe(sourcemaps.init())
       .pipe(uglify('app.min.js'))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('public/javascripts/'))
});

gulp.task('build-css', function(){
   return gulp.src('client/stylesheets/*.css')
       .pipe(sourcemaps.init())
       .pipe(minifyCss('style.min.css'))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('public/stylesheets/'))
});