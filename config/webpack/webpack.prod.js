const webpackCommon = require('./webpack.common');

module.exports = {
  ...webpackCommon,
  mode: "production",
  devtool: "source-map"
};
