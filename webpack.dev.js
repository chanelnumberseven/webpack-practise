const webpack=require('webpack');
const {merge} =require('webpack-merge');
const config=require('./webpack.common');

module.exports = merge(config,{
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot:true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})