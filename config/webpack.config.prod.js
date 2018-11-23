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
        test: /.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
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
        REACT_APP_STRIPE_PK: JSON.stringify(process.env.REACT_APP_STRIPE_PK),
      },
    }),
  ],
}
