const path = require('path');

const defaultPath = path.resolve(__dirname, '../../src');

const paths = {
  '@components': path.resolve(defaultPath, 'components'),
  '@consts': path.resolve(defaultPath, 'consts'),
  '@types': path.resolve(defaultPath, 'types')
};

module.exports = paths;
