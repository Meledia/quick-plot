import babel from 'gulp-babel';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';

const SOURCE_DIR = './src';
const SOURCE_GLOB = `${SOURCE_DIR}/**/*.js`;

const OUTPUT_DIR = './dist';

gulp.task('build', () =>
  gulp
    .src(SOURCE_GLOB)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(OUTPUT_DIR)));
