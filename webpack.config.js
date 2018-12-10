const path = require('path');
let nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const moduleObj = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[local]__[hash:base64:5]'
          }
        }
      ]
    }
  ]
};

const client = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client/index.js'
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    publicPath: '/dist/public',
    filename: 'client.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    hot: true,
    contentBase: 'dist/public',
    publicPath: '/dist/public'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: moduleObj,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

const server = {
  entry: { server: './src/server/index.js' },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: moduleObj,
  externals: [nodeExternals()],
  devServer: {
    contentBase: path.join(__dirname, 'dist/public'),
    hot: true
  }
};

module.exports = [client, server];
