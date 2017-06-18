const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('html', () => {
    gulp.src('src/landing.html')
        .pipe(gulp.dest('build'));
});

gulp.task('css', () => {
    gulp.src('src/style.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['html', 'css'], () => {
    browserSync.init({
        server: "./build"
    });

    gulp.watch('src/*.less', ['css']);

});