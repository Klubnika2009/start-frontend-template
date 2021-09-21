import gulp from 'gulp';
import changed from 'gulp-changed';
import images from 'gulp-image';
import webp from 'gulp-webp';
import gulpif from 'gulp-if';
import config from '../config';

const copyImages = () => (
  gulp.src(config.src.images)
    .pipe(changed(config.build.images))
    .pipe(gulpif(config.isProd, images({
      optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
      pngquant: ['--speed=1', '--force', 256],
      zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
      jpegRecompress: ['--strip', '--quality', 'medium', '--min', 60, '--max', 75],
      mozjpeg: ['-optimize', '-progressive'],
      gifsicle: ['--optimize'],
      // svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors'],
    })))
    .pipe(gulp.dest(config.build.images))
);

const imagesToWebp = () => (
  gulp.src(config.src.images)
    .pipe(changed(config.build.images, { extension: '.webp' }))
    .pipe(webp({ quality: 70 }))
    .pipe(gulp.dest(config.build.images))
);

export const imagesBuild = gulp.parallel(copyImages, imagesToWebp);

export const imagesWatch = () => {
  gulp.watch(config.watch.images, imagesBuild);
};
