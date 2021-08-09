const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        dependency: { not: ['url'] },
        type: 'asset/resource',
        type: 'javascript/auto'
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
};