var gulp = require('gulp');
var sass = require('gulp-sass');
var haml = require('gulp-haml');
var lite = require('lite-server');
var exec = require('gulp-exec');
var coffeescript = require('gulp-coffeescript');
// var coffeeStream = coffeescript({bare: true});

gulp.task('sass', function() {
  return gulp.src(['assets/scss/**/*.scss'])
    .pipe(sass())
    .on('error', onError)
    .pipe(gulp.dest('assets/css'))
});

// Get one .haml file and render 
gulp.task('haml-one', function() {
  gulp.src('./haml/index.haml')
    .pipe(haml())
    .pipe(gulp.dest('.'));
});

// Get all .haml files in one folder and render 
gulp.task('haml', function() {
  return gulp.src('haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('.'));
});

gulp.task('coffee', function() {
  return gulp.src('assets/coffee/**/*.coffee')
    // .pipe(coffeescript({bare: true}).on('error', gutil.log))
    .pipe(coffeescript())
    .pipe(gulp.dest('public/'));
});
 
// gulp.task('coffee', function() {
//   gulp.src('./src/*.coffee')
//     .pipe(coffeescript({bare: true}).on('error', gutil.log))
//     .pipe(gulp.dest('./public/'));
// });

coffeeStream.on('error', function(err) {});


gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('assets/coffee/**/*.coffee', ['coffee']);
  // Other watchers
  gulp.watch('haml/**/*.haml', ['haml']);
});

gulp.task('lite', function() {
  return gulp.src('./**/**')
    .pipe(exec('lite-server'));
});

gulp.task('default', function() {
  gulp.run('lite');
  gulp.run('watch');
});


function onError(err) {
  console.log(err);
  this.emit('end');
}