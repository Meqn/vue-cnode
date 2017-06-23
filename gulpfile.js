
const gulp = require('gulp');
const connect = require('gulp-connect');
const proxy = require('http-proxy-middleware');
const argv = require('yargs').argv;
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');



gulp.task('connect', () => {
	argv.p = argv.p || 3040;
	connect.server({
		name: 'web',
		root: '',
		port: argv.p,
		livereload: true
	});
});
gulp.task('sass', () => {
	gulp.src('./src/html/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer(['last 5 versions'])]))
		.pipe(gulp.dest('./src/html/'))
		.pipe(connect.reload());
});
gulp.task('html', ['sass'], () => {
	gulp.src('./src/html/**')
		.pipe(connect.reload());
})
gulp.task('watch', () => {
	gulp.watch('./src/html/**', ['html']);
});
gulp.task('default', ['connect', 'watch', 'html']);

