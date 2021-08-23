import browserSync from 'browser-sync';
import config from '../config';

const server = (callback) => {
  browserSync.create().init({
    server: {
      baseDir: config.build.root,
    },
    files: [
      config.src.html,
      config.src.styles,
      config.src.scripts,
      {
        match: config.build.images,
        fn() {
          this.reload();
        },
      },
    ],
    open: true,
    notify: true,
  });

  callback();
};

export default server;
