var gulp = require('gulp');
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    cssnano = require('gulp-cssnano');
    livereload = require('gulp-livereload');
    rename = require('gulp-rename');

gulp.task('sass', function(){
  return gulp.src('sass/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({browsers:['last 2 versions'],cascade: false}))
      .pipe(gulp.dest('./css/'))
      .pipe(rename({suffix:'.min'}))
      .pipe(cssnano())
      .pipe(gulp.dest('./css/'));
});
gulp.task('watch',function() {
    gulp.watch('sass/main.scss',['sass']);
    livereload.listen();
    gulp.watch(['css/**']).on('change',livereload.changed);
});
gulp.task('default', ['sass']);
