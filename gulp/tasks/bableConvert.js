var gulp = require('gulp');
var babel = require('gulp-babel');
var config = require('../config').bableConvert;
var change = require('gulp-changed');

gulp.task('bableConvert', function(){
  return gulp.src(config.src)
	.pipe(change(config.dest))
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest(config.dest))
})
