var gulp = require('gulp');
var config = require('../config').staticResource;

gulp.task('staticResource', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
