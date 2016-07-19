import gulp from 'gulp';
import mocha from 'gulp-mocha';
import path from 'path';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';
import '../test/helper';

const MOCHA_CONFIG = {
  globals: ['chai', 'chaiHttp', 'should', 'chaiAsPromised', 'sinon', 'sinonChai'],
  reporter: process.env.MOCHA_REPORTER || 'spec',
  timeout: 3000,
  bail: false,
};

const MOCHA_ISTANBUL_CONFIG = Object.assign({}, MOCHA_CONFIG, {
  reporter: 'min',
});

gulp.task('mocha:test', ['build'], () => (
  gulp
    .src(path.join(TEST_ROOT, '**/*.spec.js'))
    .pipe(mocha(MOCHA_CONFIG))
));

gulp.task('mocha:coverage', (done) => {
  gulp.src([
    path.join(ROOT, 'src/**/*.js'),
  ])
  .pipe(istanbul({ instrumenter: Instrumenter, includeUntested: true }))
  .pipe(istanbul.hookRequire())
  .on('finish', () => {

    const reportFolder = path.join(ROOT, 'artifacts/coverage');
    const istanbulReporters = ['json', 'html'];

    if (process.env.ISTANBUL_REPORTER) {
      istanbulReporters.push(process.env.ISTANBUL_REPORTER);
    } else {
      istanbulReporters.push('text', 'text-summary');
    }

    let minCoverage = parseInt(process.env.MIN_REQUIRED_COVERAGE, 10);
    if (isNaN(minCoverage)) {
      minCoverage = 90;
    }

    gulp.src(
      path.join(TEST_ROOT, '**/*.spec.js')
    )
    .pipe(mocha(MOCHA_ISTANBUL_CONFIG))
    .pipe(istanbul.writeReports({
      dir: reportFolder,
      reporters: istanbulReporters,
      reportOpts: {
        json: { dir: reportFolder, file: 'coverage.json' },
        html: { dir: reportFolder },
      },
    }))
    .pipe(istanbul.enforceThresholds({ thresholds: { global: minCoverage } }))
    .on('end', done);
  });
});
