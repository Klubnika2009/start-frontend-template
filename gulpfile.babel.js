import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles';
import config from './gulp/config';

config.setEnv();

export const build = gulp.series(
  clean,
  stylesBuild,
);

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    stylesWatch,
  ),
);
