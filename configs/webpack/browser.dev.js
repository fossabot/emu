const merge = require('webpack-merge');

const webpackDevConfig = require('./dev');

module.exports = merge(webpackDevConfig, {
  target: 'web',
});
