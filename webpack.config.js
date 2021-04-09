const path = require('path');

module.exports = {
  entry: '/src',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
}