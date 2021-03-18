const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = {
  ts: {
    loader: require.resolve('ts-loader')
  },

  miniCss: {
    loader: MiniCssExtractPlugin.loader
  },

  css: {
    loader: 'css-loader',
    options: {
      url: false
    }
  },

  postCss: {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [['autoprefixer']]
      }
    }
  },

  sass: {
    loader: 'sass-loader'
  }
};

module.exports = loaders;
