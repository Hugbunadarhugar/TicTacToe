const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
module.exports = {
    plugins: [    
        new HtmlWebpackPlugin({
            template: "./src/client/index.html",
            title: 'TicTacToe page'
        })],

    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    }
}