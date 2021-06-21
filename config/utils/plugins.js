const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/styles.min.css',
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../../res', 'index.html')
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'res/assets/fonts',
        to: './fonts',
      },
      {
        from: 'res/assets/img',
        to: './img',
      },
      {
        from: 'res/assets/locales',
        to: './locales',
      },
      {
        from: 'res/assets/manifest',
        to: './',
      },
    ],
  }),
];

module.exports = plugins;
