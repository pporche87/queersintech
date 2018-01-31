const path = require('path');

module.exports = {
  entry: './app/assets/index.js',
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
        test: /\.js$/,
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style!css?sourceMap'
      // },
      // {
      //   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=application/font-woff"
      // },
      // {
      //   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=application/font-woff"
      // },
      // {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=application/octet-stream"
      // },
      // {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "file"
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=image/svg+xml"
      // }
    ],
  },
};
