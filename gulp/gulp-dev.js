import path from 'path';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import eslint from 'gulp-eslint';
import runSequence from 'run-sequence';
import friendlyFormatter from 'eslint-friendly-formatter';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

const base = path.resolve(__dirname, '../');
const baseResolve = (p) => path.resolve(path.join(base, p));

const paths = {
  buildTasks: [
    baseResolve('gulp/**/*.js'),
  ],
  scripts: [
    baseResolve('src/**/*.js'),
  ],
  tests: [
    baseResolve('test/**/*.js'),
  ],
};

// ESLint
gulp.task('eslint', () => (
  gulp.src([].concat(paths.buildTasks, paths.scripts, paths.tests))
    .pipe(eslint())
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.failAfterError())
));

gulp.task('eslint:fix', () => {
  const isFixed = (file) => file.eslint && file.eslint.fixed;
  return gulp.src([].concat(paths.buildTasks, paths.scripts, paths.tests), { base })
    .pipe(eslint({
      fix: true,
    }))
    .pipe(gulpIf(isFixed, gulp.dest(base)));
});

gulp.task('pre-commit', (done) => {
  runSequence('eslint:fix', 'eslint', done);
});

gulp.task('build', () => (
  gulp.src(paths.scripts)
    // .pipe(concat('build.js'))
    .pipe(babel({
      presets: ['es2015-node5'],
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('dist'))
));

gulp.task('default', ['build']);
