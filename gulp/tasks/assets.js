import gulp from 'gulp';
import config from '../config';

export const assetsBuild = () => (
  gulp.src(config.src.assets)
    .pipe(gulp.dest(config.build.assets))
);

export const assetsWatch = () => {
  gulp.watch(config.src.assets, assetsBuild);
};
