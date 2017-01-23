//import { Gulp } from 'gulp';
var gulp = require('gulp');

gulp.src(['client/*.js', '!client/b*.js', 'client/bad.js']);

gulp.task('default');