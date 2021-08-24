import gulp from 'gulp';
import config from '../config';

export const htmlBuild = () => (
  gulp.src(config.src.html)
    .pipe(gulp.dest(config.build.html))
);

export const htmlWatch = () => {
  gulp.watch(config.src.html, htmlBuild);
};
