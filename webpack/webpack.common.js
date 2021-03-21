const path = require('path');

const { babel, css, miniCss, postCss, sass, svg, ts } = require('./loaders');
const alias = require('./alias');
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
    alias
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: [babel],
        exclude: '/node_modules/'
      },
      {
        test: /\.png|svg$/,
        loader: 'url-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [miniCss, css, postCss, sass]
      },
      {
        test: /\.svg$/,
        use: [svg]
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
