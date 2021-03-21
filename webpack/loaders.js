const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = {
  babel: {
    loader: require.resolve('babel-loader'),
    options: {
      plugins: [
        [
          require.resolve('babel-plugin-named-asset-import'),
          {
            loaderMap: {
              svg: {
                ReactComponent:
                  '@svgr/webpack?-prettier,-svgo![path]'
              }
            }
          }
        ]
      ]
    }
  },

  css: {
    loader: require.resolve('css-loader'),
    options: {
      url: false
    }
  },

  miniCss: {
    loader: MiniCssExtractPlugin.loader
  },

  postCss: {
    loader: require.resolve('postcss-loader'),
    options: {
      postcssOptions: {
        plugins: [['autoprefixer']]
      }
    }
  },

  sass: {
    loader: require.resolve('sass-loader')
  },

  svg: {
    loader: require.resolve('@svgr/webpack')
  }
};

module.exports = loaders;
