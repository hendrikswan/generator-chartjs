var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 8080
  });
});

gulp.task('reload', function () {
    gulp.src(['./*.*', './stylesheets/*.*'])
        .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.*', './stylesheets/*.*'], ['reload']);
});

gulp.task('default', ['connect', 'watch', 'reload']);