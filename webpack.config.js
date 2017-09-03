const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('.'),
    filename: 'index.min.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /(node_modules).*\.js/, loader: 'babel-loader' },
      { test: /\.(sa|s?c)ss$/, exclude: /(node_modules).*\.js/, loader: 'style-loader!css-loader!fast-sass-loader' },
    ]
  }
};
