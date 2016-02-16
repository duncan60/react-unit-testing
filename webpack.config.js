var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
          test: /\.js(x)?$/,
          exclude: /node_modules/,
          loader: 'react-hot!babel'
        }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};