var gulp = require('gulp');
var pug = require('pug');

gulp.task('default', function() {

    gulp.watch('src/*', ['build']);
});

gulp.task('build', function() {

    gulp.src('src/index.pug')
        .pipe(gulp.dest('build'));
});