const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
import html from "./file.html";

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      filename: 'src/index.html'
    })
  ]
};