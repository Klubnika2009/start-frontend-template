import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import rename from 'gulp-rename';
import config from '../config';

export const scriptsBuild = () => (
  gulp.src(config.src.scripts)
    .pipe(webpackStream(
      {
        mode: config.isDev ? 'development' : 'production',
        output: {
          filename: 'common.js',
        },
        module: {
          rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          }],
        },
      },
    ))
    .on('error', (err) => {
      console.error('WEBPACK ERROR', err);
      this.emit('end'); // Don't stop the rest of the task
    })
    .pipe(rename({
      basename: 'scripts',
      suffix: '.min',
    }))
    .pipe(gulp.dest(config.build.scripts))
);

export const scriptsWatch = () => (
  gulp.watch(config.watch.scripts, scriptsBuild)
);
