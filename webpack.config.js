import path from 'path';

export default {
    devtools: 'eval-source-map',
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: '/',   // any path wiil do; as webpack will server from memory.
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'client'),
            loaders: [ 'babel-loader' ]
        }]
    },
    resolve: {
        extensions: [ '.js' ]
    }
}