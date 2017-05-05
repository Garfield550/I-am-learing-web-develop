const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const Webpack = require('webpack');

module.exports = {
    entry: {
        // vendors: ['jquery', 'bootstrap', 'tether'],
        main: './src/js/main.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/assets/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /(\.css|\.scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /(\.jpg|\.png|\.gif|\.webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[hash:8].[name].[ext]'
                }      
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
        ],
        extensions: ['.js', '.css']
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        // new Webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     'root.jQuery': 'jquery',
        //     Tether: 'tether',
        //     tether: 'tether',
        // }),
        // new CommonsChunkPlugin({
        //     name: 'vendors',
        //     // filename: 'vendors.js',
        //     children: true,
        //     async: true,
        //     minChunks: Infinity,
        // }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
        }),
    ],
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        contentBase: 'src',
        watchContentBase: true,
        compress: true,
        port: 9000,
        hot: true,
        open: true,
        overlay: true,
    }
}