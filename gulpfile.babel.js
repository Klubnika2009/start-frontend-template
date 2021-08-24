import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import { fontsBuild, fontsWatch } from './gulp/tasks/fonts';
import { htmlBuild, htmlWatch } from './gulp/tasks/html';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import server from './gulp/tasks/server';
import config from './gulp/config';

config.setEnv();

export const build = gulp.series(
  clean,
  fontsBuild,
  htmlBuild,
  stylesBuild,
  scriptsBuild,
);

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    fontsWatch,
    htmlWatch,
    stylesWatch,
    scriptsWatch,
  ),
);
