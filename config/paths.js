const path = require('path');

const resolve = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
  build: resolve('./dist/umd'),
  cache: resolve('./node_modules/.cache'),
  modules: resolve('./node_modules'),
  postcssConfig: resolve('./config/postcss.config'),
  spec: resolve('./spec'),
  src: resolve('./src'),
  tsconfig: resolve('./tsconfig.json'),
};
