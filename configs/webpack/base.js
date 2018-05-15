const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../paths');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    modules: ['node_modules', paths.appSrc],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.appSrc}/index.html`,
    }),
  ],
};
