const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require("webpack");
module.exports = {
    plugins: [    
        new HtmlWebpackPlugin({
            template: "./src/client/index.html",
            title: 'TicTacToe page'
        }),
        new CleanWebpackPlugin(['dist'], {exclude: ['index.html']})
    ],

    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },

    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: { 
        port: 3000, 
        open: true,   
        proxy: {   
            "/api": "http://localhost:8080"    
        }
    }
}