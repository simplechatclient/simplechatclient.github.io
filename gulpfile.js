var gulp         = require('gulp')
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')
var nano         = require('gulp-cssnano')
var uglify       = require('gulp-uglify')
var imagemin     = require('gulp-imagemin')
var concat       = require('gulp-concat')
var clean        = require('gulp-clean')

var Paths = {
  SCSS                 : '_assets/scss/**/*',
  IMG                  : '_assets/img/**/*',
  FONTS                : '_assets/fonts/bootstrap/*',
  JS                   : [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
      'node_modules/fancybox/dist/js/jquery.fancybox.pack.js',
      '_assets/js/**/*'
    ],
  JS_CONCAT            : 'scc.js',
  DIST                 : 'assets',
  DIST_JS              : 'assets/js',
  DIST_CSS             : 'assets/css',
  DIST_IMAGES          : 'assets/img',
  DIST_FONTS           : 'assets/fonts/bootstrap',
}

gulp.task('default', ['clean-project', 'img-min', 'js-min', 'scss-min', 'copy-fonts'])

gulp.task('watch', function () {
  gulp.watch(Paths.JS,   ['js-min']);
});

gulp.task('clean-project', function () {
  return gulp.src(Paths.DIST, {read: false})
    .pipe(clean());
});

gulp.task('scss-min', function () {
  return gulp.src(Paths.SCSS)
    .pipe(sass())
    .pipe(nano())
    .pipe(autoprefixer())
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
  .pipe(imagemin())
  .pipe(gulp.dest(Paths.DIST_IMAGES))
});

gulp.task('copy-fonts', function(){
  return gulp.src(Paths.FONTS)
  .pipe(gulp.dest(Paths.DIST_FONTS))
});
