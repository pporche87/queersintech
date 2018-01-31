const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');
const hexrgba = require('postcss-hexrgba');


gulp.task('styles', () =>
  gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, hexrgba, autoprefixer, nested]))
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end')
    })
    .pipe(gulp.dest('./app/temp/styles/'))
);
