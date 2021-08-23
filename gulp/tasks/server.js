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
        match: ["wp-content/themes/**/*.php"],
        fn:    function (event, file) {
            /** Custom event handler **/
        }
      }
    ],
    open: true,
    notify: true,
  });

  callback();
};

export default server;
