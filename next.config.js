const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');
const config = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
};

// compile tsx files and sass files
module.exports = withTypescript(
  withSass(config));
