const path = require('node:path');

const publicPath = path.join(__dirname);

console.log({ publicPath });

module.exports = {
  mode: 'development',
  stats: {
    errorDetails: true
  },
  entry: path.join(__dirname, 'js', 'module.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        type: 'asset/resource',
        exclude: /tailwind-out.css$/
      },
      {
        test: /\.css$/i,
        include: path.join(__dirname),
        use: ['style-loader', 'css-loader'],
        exclude: [/node_modules/],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'js', 'out'),
    publicPath,
    filename: 'index.out.js',
  },
};
