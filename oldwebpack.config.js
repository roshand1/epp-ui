var webpack = require('webpack');
var path = require('path');

var resolveServerSide = {
    extensions: ['', '.css', '.es6', '.json', '.raw.less', '.sass', 'scss', '.jsx', '.es', '.webpack.js', '.web.js', '.js', '.less'],
    modulesDirectories: ['node_modules', 'vendor'],
    root: [__dirname, path.join(__dirname, 'redux'), path.join(__dirname, 'components'), path.join(__dirname, 'app')]
};
var isProdBuild = process.argv.indexOf('-p') !== -1;
var envPlugin = new webpack.DefinePlugin({
    __DEBUG__: JSON.stringify(!isProdBuild),
    __RELEASE__: JSON.stringify(isProdBuild),
    'process.env.NODE_ENV': isProdBuild ? '"production"' : '"development"'
});

module.exports = {
     devtool:'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/client.jsx'
        ],
    output: {
        path: path.resolve("./dist"), 
        filename: 'bundle.js',
        publicPath: '/'
    },
    //resolve: resolveServerSide,
    target:"web",
//   plugins: [
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin()
//   ],
plugins: [new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /NEVER_MATCH^/), envPlugin],
    module: {
        loaders: [
            {
                test: /\.(es|es6|js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-runtime', 'transform-object-rest-spread'],
                    presets: ['react', 'es2015', 'react-hmre']
                }
            },
            { 
               test: /\.less$/, 
               loader: 'style-loader!css-loader!less-loader!postcss-loader' 
            }
        ]
    }
}