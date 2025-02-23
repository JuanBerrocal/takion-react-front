const { merge } = require("webpack-merge"); 
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const helpers = require('./helpers');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = merge( common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                        {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [require.resolve('react-refresh/babel')],
                            },
                        },    
                    ],
                },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
    ],
    devtool: "eval-source-map",
    stats: "errors-only",
    devServer: {
      port: "8081",
      historyApiFallback: true,
      hot: true,
      proxy: {
        '/api' : 'http://localhost:8000',
      }
    },

});

