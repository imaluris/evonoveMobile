var gulp = require('gulp');
var browserify = require('gulp-browserify');
var serve = require('gulp-serve');
var open = require('gulp-open');
 

gulp.task('serve', serve(['public', 'build']));


gulp.task('open', function(){
  var options = {
    uri: 'localhost:3000',
    app: 'firefox'
  };
  gulp.src("public/index.html")
  .pipe(open(options));
});



gulp.task('start', ['serve', 'open']);