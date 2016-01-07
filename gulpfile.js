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

const createCopyTask = function (name, dependencies, src, dest) {
    gulp.task(name, dependencies, function () {
        return gulp
            .src(src)
            .pipe(gulp.dest(dest))
            .pipe($.size({ title: name }));
    });
};

gulp.task('clean', del.bind(null, ['_sass/vendor', 'js/vendor', 'img/vendor']));
gulp.task('clean:bower', del.bind(null, ['bower_components']));

gulp.task('bower', function () {
    return $
        .bower()
        .pipe($.size({ title: 'bower' }));
});

createCopyTask('bower:scss:bootstrap', ['bower'], ['bower_components/bootstrap/scss/**/*.scss'], '_sass/vendor/bootstrap');
createCopyTask('bower:scss:fontawesome', ['bower'], ['bower_components/font-awesome/scss/**/*.scss'], '_sass/vendor/font-awesome');
createCopyTask('bower:font:fontawesome', ['bower'], ['bower_components/font-awesome/fonts/*'], 'fonts/vendor/font-awesome');

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
        port: process.env.PORT || 1337,
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('default', function (done) {
    runSequence(
        'clean',
        ['bower:scss:bootstrap', 'bower:scss:fontawesome', 'bower:font:fontawesome'],
        'sass',
        'clean:bower',
        'jekyll:build',
        done
    );
});

gulp.task('dev', ['default'], function (done) {
    runSequence(['watch', 'browser-sync'], done);
});