var hostname = 'localhost';
var port = 3001;
module.exports = {
    devtool: 'inline-source-map',
    entry: {
        test: [
            'webpack-dev-server/client?http://' + hostname + ':' + port,
            'webpack/hot/dev-server',
            'mocha!./test/index.js'
        ]
    },
    output: {
        filename: 'test.build.js',
        path: 'test/',
        publicPath: 'http://' + hostname + ':' + port + '/test'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
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
    devServer: {
        host: hostname,
        port: port
    }
};