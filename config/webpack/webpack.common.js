const webpack = require('webpack');
const path = require("path");
const dotenv = require('dotenv');
const fs = require('fs');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const helpers = require('./helpers');

// Builds the path string.
const currentPath = path.resolve(__dirname);
const basePath = currentPath + '/.env';
const envPath = basePath + '.' + process.env.NODE_ENV;

// Uses the env.NODE_ENV archive only if exists. If not, use .env
const finalPath = fs.existsSync(envPath)
  ? envPath
  : basePath;

// Loads the .env detected file. Parses it into a JSON string, if fails returns an ampty object.
const envConfig = dotenv.config({ path: finalPath }).parsed || {};

// Constructs the JSON object to be loaded in webpack with DefinePlugin.
const envKeys = Object.keys(envConfig).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(envConfig[next]);
  return prev;
}, {});

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
        new webpack.DefinePlugin(envKeys),
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

