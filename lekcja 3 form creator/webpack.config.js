const webpack = require('webpack');
const path = require('path');
const config = {
  devtool: 'source-map', 
  entry: './src/FormCreator.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'FormCreator.js'
  }
};
module.exports = config;