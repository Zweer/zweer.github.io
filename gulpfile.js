'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');
const runSequence = require('run-sequence');
const childProcess = require('child_process');
const browserSync = require('browser-sync');

// Same as bootstrap v4
const browsers = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
];

const messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

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

gulp.task('jekyll:build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return childProcess
        .spawn('jekyll', ['build'], { stdio: 'inherit' })
        .on('close', done);
});

gulp.task('jekyll:rebuild', ['jekyll:build'], function () {
    browserSync.reload();
});

gulp.task('watch', function () {
    gulp.watch(['_sass/*'], ['sass']);
    gulp.watch(['**/*.html', 'css/*', 'js/*', '**/*.md', '_config.yml', '!_site/**/*'], ['jekyll:rebuild']);
});

gulp.task('browser-sync', function() {
    browserSync({
        port: 1337,
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('default', function (done) {
    runSequence(
        'clean',
        ['bower:scss:bootstrap'],
        'sass',
        'clean:bower',
        'jekyll:build',
        done
    );
});

gulp.task('dev', ['default'], function (done) {
    runSequence(['watch', 'browser-sync'], done);
});