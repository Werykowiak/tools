const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      filename: 'src/index.html'
    })
  ]
};