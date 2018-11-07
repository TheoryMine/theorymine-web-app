const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractScss = new ExtractTextPlugin({
  filename: 'index.css',
})

module.exports = {
  target: 'web',
  entry: ['babel-polyfill', path.resolve('./src/index.js')],
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: extractScss.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]_[hash:base64:5]',
              },
            },
            {
              loader: 'sass-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]_[hash:base64:5]',
              },
            },
          ],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.html$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]'
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },
  plugins: [
    extractScss,
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: 'TheoryMine',
      template: path.resolve('./src/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_USERNAME: JSON.stringify(process.env.REACT_APP_USERNAME),
        API_PASSWORD: JSON.stringify(process.env.REACT_APP_PASSWORD),
      },
    }),
  ],
}
