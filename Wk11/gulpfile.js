
'use strict';

//when its in the same file it knows 

// SASS Packages
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
//adds prefixes so it works on all browsers

//step2
const browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './',
            index: "index_empty.html"
       },
    })
})



gulp.task('sassworkflow', function () {
    gulp.src('./src/sass/**/*.scss')
    // tasks go here
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('default',['browserSync','sassworkflow'], function() {
    gulp.watch('./src/sass/**/*.scss', ['sassworkflow']);
})