var gulp = require('gulp');

gulp.task('build', ['staticResource','bableConvert', 'browserify']);

