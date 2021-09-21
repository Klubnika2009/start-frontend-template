const projectFolder = './app';
const projectBuild = './build';

const config = {
  src: {
    root: projectFolder,
    htmls: [`${projectFolder}/**/*.html`, `!${projectFolder}/template/**/*.html`],
    styles: `${projectFolder}/scss/**/*.scss`,
    scripts: `${projectFolder}/js/**/*.js`,
    assets: `${projectFolder}/assets/**/*.*`,
    images: `${projectFolder}/images/**/*.{jpg,jpeg,png,svg}`,
    iconsMono: `${projectFolder}/images/icons/mono/**/*.svg`,
    iconsMulti: `${projectFolder}/images/icons/multi/**/*.svg`,
  },
  build: {
    root: projectBuild,
    htmls: `${projectBuild}/`,
    styles: `${projectBuild}/css`,
    scripts: `${projectBuild}/js`,
    assets: `${projectBuild}/assets`,
    images: `${projectBuild}/images`,
  },
  watch: {
    htmls: `${projectFolder}/**/*.html`,
    styles: `${projectFolder}/scss/**/*.scss`,
    scripts: `${projectFolder}/js/**/*.js`,
    assets: `${projectFolder}/assets/**/*.*`,
    images: `${projectFolder}/images/**/*.{jpg,jpeg,png,svg}`,
    iconsMono: `${projectFolder}/images/icons/mono/**/*.svg`,
    iconsMulti: `${projectFolder}/images/icons/multi/**/*.svg`,
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
