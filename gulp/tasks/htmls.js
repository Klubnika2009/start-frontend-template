import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import webpHtml from 'gulp-webp-in-html';
import removeHtmlComments from 'gulp-remove-html-comments';
import beautify from 'gulp-beautify';
import config from '../config';

export const htmlBuild = () => (
  gulp.src(config.src.htmls)
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(beautify.html({
      indent_size: 2,
    }))
    .pipe(removeHtmlComments())
    .pipe(gulp.dest(config.build.htmls))
);

export const htmlWatch = () => {
  gulp.watch(config.watch.htmls, htmlBuild);
};
