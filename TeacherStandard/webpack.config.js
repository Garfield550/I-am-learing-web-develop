const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    common: './src/js/common.js',
    index: './src/js/index.js',
    detail: './src/js/detail.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist/assets/'),
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }, 
      {
        test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, 
      // {
      //   test: /\.(woff|woff2|eot|ttf|svg)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 100000,
      //       name: '[hash:8].[name].[ext]',
      //     }
      //   }
      // }, 
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            collapseWhitespace: true
          }
        }
      }, 
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }, 
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.json', '.js', '.jsx', '.css', 'scss']
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new Webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    port: 8090,
    contentBase: path.join(__dirname, 'src'),
    overlay: true,
    hot: true,
    hotOnly: true,
    inline: true
  },
  watchOptions: {
    ignored: /node_modules/
  }
};