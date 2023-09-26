const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Apply style-loader for .css files
        use: ['style-loader', 'css-loader'], // Use 'style-loader' and 'css-loader'
      },
    ],
  },
};