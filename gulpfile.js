var gulp = require('gulp'),
    urlAdjuster = require('gulp-css-replace-url'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    htmlReplace = require('gulp-html-replace'),
    htmlmin = require('gulp-htmlmin');

gulp.task('concatCss', function () {
    return gulp.src([
        'css/normalize.css',
        'css/**/!(main)*.css',
        'css/*.css',
    ])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('build/css/'));
});

gulp.task('minifyCss', ['concatCss'], function () {
    return gulp.src('build/css/all.css')
        .pipe(minifyCSS())
        .pipe(rename(function (path) {
            path.basename += '.min';
            path.extname = '.css';
        }))
        .pipe(gulp.dest('build/css/'));
});

gulp.task('concatJs', function () {
    return gulp.src([
        'js/vendor/**.js',
        'js/**/!(main)*.js',
        'js/*.js',
    ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('uglifyJs', ['concatJs'], function () {
    return gulp.src('build/js/all.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += '.min';
            path.extname = '.js';
        }))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('replaceMinifyHtml', function () {
    return gulp.src('*.html')
        .pipe(htmlReplace({
            'css': 'css/all.min.css',
            'js': 'js/all.min.js',
        }))
        .pipe(htmlmin({
            removeComments: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('default', ['replaceMinifyHtml','minifyCss', 'uglifyJs']);