var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');

var webpack = require('gulp-webpack');
var $ = require('gulp-load-plugins')();
var path = require('path');

gulp.task('bundle', function() {
  return gulp.src('./src/js/main.js')
    .pipe(webpack({
      entry: [
          './src/js/main.js'
        ],
        output: {
          filename: 'bundle.js'
        },
        resolve: {
          extensions: ['', '.js', '.jsx']
        },
        module: {
          loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
          }]
        }
    }))
    .pipe(gulp.dest('dist/js'));
});

//===BROWSERIFY===
gulp.task('browserify', function() {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

//===CSSMIN===/
gulp.task('cssmin', function () {
    gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/styles'))
        .pipe(connect.reload());
});

//===JSHINT===/
gulp.task('jshint', function() {
    gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//===COPY===/
gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());

    gulp.src('src/js/vendor/**/*.js')
        .pipe(gulp.dest('dist/js/vendor'))
        .pipe(connect.reload());

    gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest('dist/assets'))
        .pipe(connect.reload());
});

//===WATCH===/
//Watch for file changes and live reload on the browser
gulp.task('watch', function() {
    connect.server({
        root: 'dist',
        port: '1337',
        livereload: false
    });
    gulp.watch('src/**/*.*', ['build']);
});

gulp.task('build', ['bundle', 'copy', 'cssmin']);

gulp.task('default', ['watch', 'build']);

gulp.task('jshint', ['jshint']);
