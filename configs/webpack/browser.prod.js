const merge = require('webpack-merge');

const webpackDevConfig = require('./prod');

module.exports = merge(webpackDevConfig, {
  target: 'web',
});
