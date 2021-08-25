import gulp from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import webp from 'gulp-webp';
import gulpif from 'gulp-if';
import config from '../config';

export const copyImages = () => (
  gulp.src(config.src.images)
    .pipe(changed(config.build.images))
    .pipe(gulpif(config.isProd, imagemin([
      imagemin.mozjpeg({ quality: 70, progressive: true }),
      imageminPngquant({ quality: [0.7, 0.8] }),
      imagemin.svgo(),
    ])))
    .pipe(gulp.dest(config.build.images))
);

export const imagesToWebp = () => (
  gulp.src(config.src.images)
    .pipe(changed(config.build.images, { extension: '.webp' }))
    .pipe(webp({ quality: 70 }))
    .pipe(gulp.dest(config.build.images))
);

export const imagesBuild = gulp.parallel(copyImages, imagesToWebp);

export const imagesWatch = () => {
  gulp.watch(config.watch.images, imagesBuild);
};
