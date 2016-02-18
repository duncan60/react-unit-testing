var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: __dirname + 'dist',
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['react','es2015', 'stage-0'],
                    env: {
                        development: {
                            presets: ['react-hmre']
                        }
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};