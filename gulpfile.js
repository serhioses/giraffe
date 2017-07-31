const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-ruby-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    path = require('path'),
    devDir = path.resolve(__dirname, 'app/sass'),
    distDir = path.resolve(__dirname, 'app/css'),
    browsers = ['> 5%', 'Firefox > 10', 'ie >= 8', 'Chrome > 15', 'Safari > 3'],
    isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    
gulp.task('styles', function () {
    return sass(devDir + '/style.scss', {
        style: 'expanded',
        loadPath: [devDir]
    })
    .pipe(autoprefixer({
        browsers: browsers
    }))
    .pipe(gulp.dest(distDir));
});

gulp.task('minifycss', function () {
    return gulp.src(distDir + '/style.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(distDir));
});

gulp.task('watch', function () {
    gulp.watch(devDir + '/*.scss', gulp.series('styles', 'minifycss'));
});

gulp.task('default', gulp.parallel('watch', 'styles', 'minifycss'));
