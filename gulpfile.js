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
    outputSrc: [
        '*.html',
        'js/*.js',
        'components/*.vue',
        'components/*.css',
        'components/icons/*.*',
        'components/images/*.*'
    ],
    outputDest: 'output/'
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

gulp.task('clean', ['clean_src', 'clean_output']);

gulp.task('build', ['clean', 'stylus']);

gulp.task('watch', function () {
    gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('run', ['build', 'serve_examples', 'open_examples']);

// default

gulp.task('default', ['watch', 'build', 'run']);

// output

gulp.task('clean_output', function () {
	return del(paths.outputDest + '**');
});

gulp.task('build_output', ['clean_output'], function () {
	for (var i in paths.outputSrc)
	    gulp.src(paths.outputSrc[i])
	        .pipe(gulp.dest(paths.outputDest + path.dirname(paths.outputSrc[i])));
});

gulp.task('serve_output', ['build_output'], function () {
    plugins.liveServer.static('./', port).start();
});

gulp.task('open_output', ['serve_output'], function () {
    open('http://localhost:' + port + '/' + paths.outputDest);
});

gulp.task('output', ['open_output']);
