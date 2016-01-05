'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');

// Same as bootstrap v4
var browsers = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
];

gulp.task('clean', del.bind(null, ['_sass/vendor', 'js/vendor', 'img/vendor']));
gulp.task('clean:bower', del.bind(null, ['bower_components']));

gulp.task('bower', function () {
    return $
        .bower()
        .pipe($.size({ title: 'bower' }));
});

gulp.task('bower:scss:bootstrap', ['bower'], function () {
    return gulp
        .src([
            'bower_components/bootstrap/scss/**/*.scss'
        ])
        .pipe(gulp.dest('_sass/vendor/bootstrap'))
        .pipe($.size({ title: 'bower:scss:bootstrap' }));
});

gulp.task('sass', function () {
    return gulp
        .src(['_sass/*.scss'])
        .pipe($.sourcemaps.init())
        .pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
        .pipe($.autoprefixer({ browsers: browsers, cascade: false }))
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('css'))
        .pipe($.size({ title: 'sass' }));
});

gulp.task('watch', function () {
    gulp.watch(['_sass/*'], ['sass']);
});

gulp.task('default', function (done) {
    runSequence(
        'clean',
        ['bower:scss:bootstrap'],
        'sass',
        'clean:bower',
        done
    );
});

gulp.task('dev', ['default'], function (done) {
    runSequence(['watch'], done);
});