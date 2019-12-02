// 'use strict';
// //tasks go in gulp

// // SASS Packages
// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const cssnano = require('gulp-cssnano');
// const sourcemaps = require('gulp-sourcemaps');
// const autoprefixer = require('gulp-autoprefixer');

// gulp.task('sassworkflow', function () {
//     gulp.src('./src/sass/**/*.scss')
//     //source is moditered here - all sass

//     // tasks go here - all go in pipe
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(cssnano())
//     .pipe(autoprefixer({
//         browsers: ['last 2 versions'],
//         cascade: false
//     }))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./dist/css/'));
// });

// gulp.task('default',['sassworkflow'], function() {
//     gulp.watch('./src/sass/**/*.scss', ['sassworkflow']);
//     //watch keeps it running it in the background
// })

'use strict';

// SASS Packages
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// JS packages
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

// Web packages
const browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './',
            index: "index.html"
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

// add linting
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
        './src/js/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        //combines all into one
        .pipe(gulp.dest('./dist/js'))
        .pipe(sourcemaps.write())
        .pipe(rename('scripts.min.js'))
        .pipe(browserSync.reload({
             stream: true
         }))
});

gulp.task('default',['browserSync', 'sassworkflow', 'scripts', 'lint'], function() {
    gulp.watch('./src/js/*.js', ['lint', 'scripts']);
    gulp.watch('./src/sass/**/*.scss', ['sassworkflow']);
})