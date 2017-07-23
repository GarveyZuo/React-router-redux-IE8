//gulp打包的第一个调函数
var gulp   = require('gulp');
var config = require('../config');

gulp.task('default', ['browserSync'], function() {
  global.isWatching = true;//使能全局watch，编辑代码后自动编译
  gulp.watch(config.bableConvert.watch, ['bableConvert','browserify']);
  gulp.watch(config.less.watch, ['less']);
  gulp.watch(config.staticResource.src, ['staticResource']);
});
