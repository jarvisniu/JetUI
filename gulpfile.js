/**
 * Gulp config file for Bu.js - https://github.com/jarvisniu/Bu.js
 */

var fs = require('fs');
var path = require('path');

var gulp = require('gulp');
var del = require('del');
var open = require('open');

// Gulp plugins: coffee, concat, header, uglify, sourcemaps, jade, stylus, liveServer
var plugins = require('gulp-load-plugins')();

// config
var port = 3000;
var paths = {
    stylus: [
        'components/*.styl'
    ],
    clean: [
        'components/*.css'
    ],
    dist: [
        '*.html',
        'js/*.js',
        'components/*.vue',
        'components/*.css',
        'components/icons/*.*',
        'components/images/*.*'
    ],
    distTo: 'dist/'
};

// atom tasks

gulp.task('clean_src', function () {
    return del(paths.clean);
});

gulp.task('stylus', function () {
    return gulp.src(paths.stylus)
        .pipe(plugins.stylus())
        .pipe(gulp.dest('components/'));
});

gulp.task('serve_examples', ['build'], function () {
    plugins.liveServer.static('./', port).start();
});

gulp.task('open_examples', ['serve_examples'], function () {
    open('http://localhost:' + port + '/');
});

// compound tasks

gulp.task('clean', ['clean_src', 'clean_dist']);

gulp.task('build', ['clean', 'stylus']);

gulp.task('watch', function () {
    gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('run', ['build', 'serve_examples', 'open_examples']);

// default

gulp.task('default', ['watch', 'build', 'run']);

// distribution

gulp.task('clean_dist', function () {
	return del(paths.distTo + '**');
});

gulp.task('build_dist', ['clean_dist', 'build'], function () {
	for (var i in paths.dist)
	    gulp.src(paths.dist[i])
	        .pipe(gulp.dest(paths.distTo + path.dirname(paths.dist[i])));
});

gulp.task('serve_dist', ['build_dist'], function () {
    plugins.liveServer.static('./', port).start();
});

gulp.task('open_dist', ['serve_dist'], function () {
    open('http://localhost:' + port + '/' + paths.distTo);
});

gulp.task('dist', ['open_dist']);
