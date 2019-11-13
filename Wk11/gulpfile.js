
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

const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');


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
    .pipe(babel({
        // transpile ES6 to ES5 and minify
        presets: ['@babel/preset-env'] // bug with
        minify - doesnt reload
        }))
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
        .pipe(gulp.dest('./dist/js'))
        .pipe(sourcemaps.write())
        .pipe(rename('scripts.min.js'))
        .pipe(browserSync.reload({
             stream: true
         }))
});

gulp.task('default',['browserSync', 'sassworkflow', 'lint', 'scripts'], function() {
    gulp.watch('./src/sass/**/*.scss', ['sassworkflow']);
    gulp.watch('./src/js/*.js', ['lint', 'scripts']);
})