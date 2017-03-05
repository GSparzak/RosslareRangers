var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
    return gulp.src('styles/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('styles/scss/**/*.scss', ['sass']);
});
