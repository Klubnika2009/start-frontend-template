const projectFolder = 'app';
const projectBuild = './build';

const config = {
  src: {
    root: projectFolder,
    styles: `${projectFolder}/scss/**/*.scss`,
    scripts: `${projectFolder}/js/**/*.js`,
    fonts: `${projectFolder}/fonts/**/*.{woff,woff2,ttf,eot}`,
    images: `${projectFolder}/images/**/*.{jpg,jpeg,png,svg}`,
    pug: `${projectFolder}/pug`,
  },
  build: {
    styles: `${projectBuild}/css`,
    scripts: `${projectBuild}/js`,
    fonts: `${projectBuild}/fonts`,
    images: `${projectBuild}/images`,
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
