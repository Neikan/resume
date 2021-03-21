const path = require('path');
const webpackCommon = require('./webpack.common');

module.exports = {
  ...webpackCommon,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    open: 'Chrome' || true,
    port: 1777,
    compress: true,
    hot: true,
    watchContentBase: true,
    historyApiFallback: true
  },
};
