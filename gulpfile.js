'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');

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
        .pipe($.rename(function (path) {
            if (path.basename.substr(0, 1) !== '_') {
                path.basename = '_' + path.basename;
            }
            
            return path;
        }))
        .pipe(gulp.dest('_sass/vendor/bootstrap'))
        .pipe($.size({ title: 'bower:scss:bootstrap' }));
});

gulp.task('default', function (done) {
    runSequence(
        'clean',
        ['bower:scss:bootstrap'],
        'clean:bower',
        done
    );
});