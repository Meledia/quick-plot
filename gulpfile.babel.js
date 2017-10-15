import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';

const SOURCE_DIR = './src';
const SOURCE_GLOB = `${SOURCE_DIR}/**/*.js`;

const OUTPUT_DIR = './dist';

gulp.task('lint', () =>
  gulp
    .src(SOURCE_GLOB)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError()));

gulp.task('build', ['lint'], () =>
  gulp
    .src(SOURCE_GLOB)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(OUTPUT_DIR)));

gulp.task('watch', () => gulp.watch(SOURCE_GLOB, ['build']));
