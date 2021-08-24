import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import sourcemap from 'gulp-sourcemaps';
import dartSass from 'sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gcmq from 'gulp-group-css-media-queries';
import config from '../config';

const sass = gulpSass(dartSass);

export const stylesBuild = () => (
  gulp.src(config.src.styles)
    .pipe(plumber({
      errorHandler: notify.onError({
        title: 'Error',
        message: '<%= error.message %>',
        sound: 'Beep',
      }),
    }))
    .pipe(gulpif(config.isDev, sourcemap.init()))
    .pipe(sass())
    .pipe(gulpif(config.isProd, gcmq()))
    .pipe(gulpif(config.isProd, autoprefixer({
      cascade: false,
      grid: true,
    })))
    .pipe(gulpif(config.isProd, cleanCss({ level: 2 })))
    .pipe(rename({
      basename: 'styles',
      suffix: '.min',
    }))
    .pipe(gulpif(config.isDev, sourcemap.write()))
    .pipe(gulp.dest(config.build.styles))
);

export const stylesWatch = () => gulp.watch(config.src.styles, stylesBuild);
