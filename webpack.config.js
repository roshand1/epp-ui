var webpack = require('webpack');
const path = require('path');
// var nodeExternals = require('webpack-node-externals');

var isProduction = process.env.NODE_ENV === 'production';
var productionPluginDefine = isProduction ? [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
] : [];
var clientLoaders = isProduction ? productionPluginDefine.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
]) : [];

var commonLoaders = [
  {
    test: /\.json$/,
    loader: 'json-loader'
  }
];

module.exports = [
  {
    entry:  './app/serversideEntryPoint.js',
    output: {
        path: path.resolve("./dist"), 
        filename: 'bundle.js',
        publicPath: '/'
    },
     target: 'node',
    // node: {
    //   console: false,
    //   global: false,
    //   process: false,
    //   Buffer: false,
    //   __filename: false,
    //   __dirname: false
    // },
    // externals: nodeExternals(),
    plugins: productionPluginDefine,
    module: {
      loaders: [
        {
          test: path.join(__dirname,'components'),
          loader: 'babel-loader',
          query:{
              presets:['react','es2015']
          }
        },
        {
          test: path.join(__dirname,'client'),
          loader: 'babel-loader',
          query:{
              presets:['react','es2015']
          },
        },
        {
          test: path.join(__dirname,'redux'),
          loader: 'babel-loader',
          query:{
              presets:['react','es2015']
          }
        },
        {
          test: path.join(__dirname,'utils'),
          loader: 'babel-loader',
          query:{
              presets:['react','es2015']
          }
        }
      ].concat(commonLoaders)
    }
  }
];