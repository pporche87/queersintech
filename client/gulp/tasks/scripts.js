const gulp = require('gulp');
const webpack = require('webpack');
const config = require('../../webpack.config.js');

gulp.task('scripts', ['modernizr'], done =>
  webpack(config, (error, stats) => {
    if (error) {
      console.log(error.toString());
    }
    console.log(stats.toString());
    done();
  }));
