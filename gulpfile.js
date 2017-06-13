var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
    return gulp.src('public/styles/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/styles/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('public/styles/scss/**/*.scss', ['sass']);
});
