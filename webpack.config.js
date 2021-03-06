import path from 'path';
import webpack from 'webpack';

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './client/index.js'
    ],
    output: {
        path: '/',   // any path wiil do; as webpack will serve from memory.
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: debug ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ] : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'client'),
            loaders: [ 'react-hot-loader/webpack', 'babel-loader' ]
        }]
    },
    resolve: {
        extensions: [ '.js' ]
    }
};

/*
import path from 'path';
import webpack from 'webpack';

export default {
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',   // any path wiil do; as webpack will server from memory.
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'client'),
            loaders: [ 'react-hot-loader/webpack', 'babel-loader' ]
        }]
    },
    resolve: {
        extensions: [ '.js' ]
    }
}
*/