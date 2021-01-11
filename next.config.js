const withReactSvg = require('next-react-svg');
const path = require('path');
const withImages = require('./config/images');

module.exports = withImages(Object.assign({
  inlineImageLimit: 0,
  webpack(config, options) {
    return config
  }
}, withReactSvg({
  include: path.resolve(__dirname, 'assets'),
  webpack(config, options) {
    return config
  }
})));
