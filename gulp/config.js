const projectFolder = 'app';
const projectBuild = './build';

const config = {
  src: {
    root: projectFolder,
    html: [`${projectFolder}/**/*.html`, `!${projectFolder}/template/**/*.html`],
    styles: `${projectFolder}/scss/**/*.scss`,
    scripts: `${projectFolder}/js/**/*.js`,
    fonts: `${projectFolder}/fonts/**/*.{woff,woff2,ttf,eot}`,
    images: `${projectFolder}/images/**/*.{jpg,jpeg,png,svg}`,
  },
  build: {
    root: projectBuild,
    html: `${projectBuild}/`,
    styles: `${projectBuild}/css`,
    scripts: `${projectBuild}/js`,
    fonts: `${projectBuild}/fonts`,
    images: `${projectBuild}/images`,
  },
  watch: {
    html: `${projectFolder}/**/*.html`,
    styles: `${projectFolder}/scss/**/*.scss`,
    scripts: `${projectFolder}/js/**/*.js`,
    fonts: `${projectFolder}/fonts/**/*.{woff,woff2,ttf,eot}`,
    images: `${projectFolder}/images/**/*.{jpg,jpeg,png,svg}`,
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
