var dest = './build',
  src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  less: {
    src: [src + '/less/main.less'],
    watch: [
      src + '/less/**'
    ],
    dest: dest
  },
  staticResource: {
    src: [src + "/html/**",src + "/static/**"],
    dest: dest
  },
  bableConvert: {
    src: src + '/app/**',
    watch: [
      src + '/app/**'
    ],
    dest: './dist/js'
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './dist/js/app.js',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};
