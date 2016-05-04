var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var nano         = require('gulp-cssnano');
var uglify       = require('gulp-uglify');
var imagemin     = require('gulp-imagemin');
var concat       = require('gulp-concat');
var del          = require('del');

var Paths = {
  SCSS                 : [
      'node_modules/angular-material/angular-material.scss',
      '_assets/scss/**/*'
  ],
  IMG                  : '_assets/img/**/*',
  JS                   : [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-aria/angular-aria.min.js',
      'node_modules/angular-material/angular-material.js',
      '_assets/js/**/*'
    ],
  JS_CONCAT            : 'scc.js',
  CSS_CONCAT           : 'scc.css',
  DIST_RECURSIVE       : 'assets/**/*',
  DIST_JS              : 'assets/js',
  DIST_CSS             : 'assets/css',
  DIST_IMAGES          : 'assets/img'
};

gulp.task('default', ['clean-project', 'img-min', 'js-min', 'scss-min']);

gulp.task('watch', function () {
  gulp.watch(Paths.JS, ['js-min']);
});

gulp.task('clean-project', function () {
  return del.sync([Paths.DIST_RECURSIVE]);
});

gulp.task('scss-min', function () {
  return gulp.src(Paths.SCSS)
    .pipe(sass())
    .pipe(nano())
    .pipe(autoprefixer())
    .pipe(concat(Paths.CSS_CONCAT))
    .pipe(gulp.dest(Paths.DIST_CSS))
});

gulp.task('js-min', function () {
  return gulp.src(Paths.JS)
    .pipe(concat(Paths.JS_CONCAT))
    .pipe(uglify())
    .pipe(gulp.dest(Paths.DIST_JS))
});

gulp.task('img-min', function(){
  return gulp.src(Paths.IMG)
  .pipe(imagemin({progressive: true}))
  .pipe(gulp.dest(Paths.DIST_IMAGES))
});
