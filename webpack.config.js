const path = require('path');
const nodeExternals = require('webpack-node-externals')
   const loaders = [{
     test: /\.js$/,
     exclude: /(node_modules|bower_components)/,
     loader: 'babel-loader',
     query: {
       presets: ['es2015'],
     },
}]

const package = {
    entry: './src/main.js',
    output: {
    path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module: { loaders },
    target: 'node'
}
module.exports = package