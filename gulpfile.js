(function () {
	var gulp = require('gulp'),
		path = require('path'),
		clean = require('gulp-clean-css'),
		sourcemaps = require('gulp-sourcemaps'),
		gdebug = require('gulp-debug'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename');

	gulp.task('sass:watch2', function() {
		var sass = require('gulp-sass');
	    gulp.watch('./**/*.scss', function(event) {
			console.log('sass: ' + event.path + ' change...')
			gulp.src(event.path)
			.pipe(sass({
				outputStyle: 'compressed'
			}))
			.pipe(gulp.dest(event.path.replace(/[^\.\/]+\.scss$/, '').replace('static/sass', 'static/css')));
			// .pipe(gulp.dest(event.path.replace(/[^\.\/]+\.scss$/, '')))
			// .pipe(connect.reload());
		});
	});

	gulp.task('less:clean', function() {
		var less = require('gulp-less');
		gulp.watch(['./**/*.less'], function(event) {
			console.log('less: ' + event.path + 'change...')
			gulp.src(event.path)
			.pipe(sourcemaps.init())
			.pipe(less())
			.pipe(sourcemaps.write('./'))
			.pipe(clean())
			.pipe(gulp.dest(event.path.replace(/[^\.\/]+\.less$/, '').replace('static/less', 'static/css')));
			// .pipe(connect.reload());
			console.log('less change to clean css finished');
		})
	})

	gulp.task('less:watch', function() {
		var less = require('gulp-less');
		gulp.watch(['./**/*.less'], function(event) {
			console.log('less: ' + event.path + 'change...')
			gulp.src(event.path)
			.pipe(sourcemaps.init())
			.pipe(less())
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest(event.path.replace(/[^\.\/]+\.less$/, '').replace('static/less', 'static/css')));
			// .pipe(connect.reload());
			console.log('less change to normalized css finished');
		})
	})

	gulp.task('jsCompiler', function() {
		var basePath = process.argv.slice(3)[0].replace(/^--/, '') || '';
		console.log(basePath + '/**/*-debug.js')
		gulp.src(basePath + '/**/*-debug.js')
		.pipe(gdebug())
		.pipe(uglify())
		.pipe(rename(function(path) {
			path.basename = path.basename.replace('-debug', '');
		}))
		.pipe(gulp.dest('./' + basePath));
	})
})();
