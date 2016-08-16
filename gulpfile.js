/**
 * Gulp config file for Bu.js - https://github.com/jarvisniu/Bu.js
 */

var fs = require('fs');

var gulp = require('gulp');
var del = require('del');
var open = require('open');

// Gulp plugins: coffee, concat, header, uglify, sourcemaps, jade, stylus, liveServer
var plugins = require('gulp-load-plugins')();

// config
var port = 3000;
var paths = {
    stylus: [
        'vue/*.styl'
    ],
    clean: [
        'vue/*.css'
    ]
};

// atom tasks

gulp.task('clean', function () {
    return del(paths.clean);
});

gulp.task('stylus', function () {
    return gulp.src(paths.stylus)
        .pipe(plugins.stylus())
        .pipe(gulp.dest('vue/'));
});

gulp.task('serve_examples', ['stylus'], function () {
    plugins.liveServer.static('./', port).start();
});

gulp.task('open_examples', ['serve_examples'], function () {
    open('http://localhost:' + port + '/');
});

// compound tasks

gulp.task('build', ['clean', 'stylus']);

gulp.task('watch', function () {
    gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('run', ['build', 'serve_examples', 'open_examples']);

// default tasks

gulp.task('default', ['watch', 'build', 'run']);
