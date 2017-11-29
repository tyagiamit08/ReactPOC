const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

var ExtractTextPlugin  = require("extract-text-webpack-plugin")

module.exports = {
  entry: './client/index.js',
  output: {
    path: './dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192',
        exclude: /node_modules/
      }, 
      {
        test: /\.css$/,
        loaders:['style-loader','css-loader']
     }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    historyApiFallback: true 
  }
}
