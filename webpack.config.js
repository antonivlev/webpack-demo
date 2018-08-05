const path = require('path');
console.log('webpack config executed, path path:');
console.log(path.resolve(__dirname, 'dist'));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  mode: 'development',
};
