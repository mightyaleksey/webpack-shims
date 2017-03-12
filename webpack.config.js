'use strict';

const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    filename: 'result.js',
  },

  target: 'web', // default value

  module: {
    loaders: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
        ],
      },
    ],
  },

  plugins: [
    new Visualizer(),
  ],
};
