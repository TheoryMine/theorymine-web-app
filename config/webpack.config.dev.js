const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  target: 'web',
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    path.resolve('./src/index.js'),
  ],
  output: {
    path: '/',
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
        test: /\.json$/,
        loader: 'json-loader',
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
    extensions: [ '.js', '.jsx', '.json', '.scss' ],
    modules: [ path.resolve('./src'), path.resolve('./node_modules') ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'TheoryMine',
      template: path.resolve('./src/index.html'),
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve('./dist'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        REACT_APP_USERNAME: JSON.stringify(process.env.REACT_APP_USERNAME),
        REACT_APP_PASSWORD: JSON.stringify(process.env.REACT_APP_PASSWORD),
      },
    }),
  ],
}
