const path = require('path');

const defaultPath = path.resolve(__dirname, '../src');

const paths = {
  '@app': path.resolve(defaultPath),
  '@common': path.resolve(defaultPath, 'common'),
  '@consts': path.resolve(defaultPath, 'consts'),
  '@store': path.resolve(defaultPath, 'store'),
  '@types': path.resolve(defaultPath, 'types'),
  '@utils': path.resolve(defaultPath, 'utils'),
  '@views': path.resolve(defaultPath, 'views')
};

module.exports = paths;
