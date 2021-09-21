import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets';
import { htmlBuild, htmlWatch } from './gulp/tasks/htmls';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import server from './gulp/tasks/server';
import config from './gulp/config';

config.setEnv();

export const build = gulp.series(
  clean,
  assetsBuild,
  imagesBuild,
  spritesBuild,
  htmlBuild,
  stylesBuild,
  scriptsBuild,
);

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    assetsWatch,
    imagesWatch,
    spritesWatch,
    htmlWatch,
    stylesWatch,
    scriptsWatch,
  ),
);
