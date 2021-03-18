const path = require('path');

const { ts, miniCss, css, postCss, sass } = require('./loaders');
const paths = require('./paths');
const plugins = require('./plugins');

const TerserPlugin = require('terser-webpack-plugin');

const config = {
  target: 'web',
  entry: {
    app: [
      './src/index.tsx',
      './src/styles/styles.scss'
    ]
  },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: { ...paths }
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: [ts],
        exclude: '/node_modules/'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [miniCss, css, postCss, sass]
      }
    ]
  },
  plugins,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          output: {
            comments: false
          },
          sourceMap: true
        },
        parallel: true
      })
    ]
  }
};

module.exports = config;
