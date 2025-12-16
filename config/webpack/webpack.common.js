const webpack = require('webpack');
const path = require("path");
const dotenv = require('dotenv');
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const helpers = require('./helpers');



module.exports = { 
    context: helpers.resolveFromRootPath('src'),
    entry: {
        app: "./index.tsx"
    },
    resolve: {
        alias: {
            assets: helpers.resolveFromRootPath('src/assets'),
            common: helpers.resolveFromRootPath('src/common'),
            core: helpers.resolveFromRootPath('src/core'),
            layouts: helpers.resolveFromRootPath('src/layouts'),
            pods: helpers.resolveFromRootPath('src/pods'),
            scenes: helpers.resolveFromRootPath('src/scenes'),
            },
        extensions: [".js", ".ts", ".tsx"],
        plugins: [new TsconfigPathsPlugin({
            extensions:[".js", ".ts", ".tsx"],
            configFile: "tsconfig.json"}),
        ]
      },
    output: {
        filename: "[name].[chunkhash].js",
        path: helpers.resolveFromRootPath("dist"),
        publicPath: '/'
    },
    module: { 
        rules: [ 
             
                /*test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                        {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [require.resolve('react-refresh/babel')],
                            },
                        },    
                    ],
                },*/
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
            },
        ], 
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html",
        scriptLoading: "blocking",
        hash: true, }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css",
            }),
     ],
    
}

