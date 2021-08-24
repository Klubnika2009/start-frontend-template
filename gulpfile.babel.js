import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import { htmlBuild, htmlWatch } from './gulp/tasks/html';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles';
import config from './gulp/config';

config.setEnv();

export const build = gulp.series(
  clean,
  htmlBuild,
  stylesBuild,
);

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    htmlWatch,
    stylesWatch,
  ),
);
