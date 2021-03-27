const path = require('path');

const defaultPath = path.resolve(__dirname, '../src');

const paths = {
  '@components': path.resolve(defaultPath, 'components'),
  '@consts': path.resolve(defaultPath, 'consts'),
  '@types': path.resolve(defaultPath, 'types'),
  '@utils': path.resolve(defaultPath, 'utils'),
  '@views': path.resolve(defaultPath, 'views')
};

module.exports = paths;
