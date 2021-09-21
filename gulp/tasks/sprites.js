import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import config from '../config';

const spriteMono = () => (
  gulp.src(config.src.iconsMono)
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprites/sprite-mono.svg',
          example: true,
        },
        preview: {
          sprite: 'index.html',
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name', 'fill.*', 'stroke.*'],
                  },
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(gulp.dest(config.build.images))
);

const spriteMulti = () => (
  gulp.src(config.src.iconsMulti)
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprites/sprite-multi.svg',
          example: true,
        },
        preview: {
          sprite: 'index.html',
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name'],
                  },
                },
                {
                  removeUselessStrokeAndFill: false,
                },
                {
                  inlineStyles: true,
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(gulp.dest(config.build.images))
);

export const spritesBuild = gulp.parallel(spriteMono, spriteMulti);

export const spritesWatch = () => {
  gulp.watch(config.watch.iconsMono, spriteMono);
  gulp.watch(config.watch.iconsMulti, spriteMulti);
};
