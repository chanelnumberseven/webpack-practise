const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    resolve:{
        alias:{
            '@':path.join(__dirname,'./src')
        }
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: './js/[name].[hash].js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|\svg|jpg)$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'files'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'demo',
            template:require('html-webpack-template')
        }),
        new webpack.ProvidePlugin({
            addImage:[path.join(__dirname,'./src/img'),'addImage']
        })
    ]
}