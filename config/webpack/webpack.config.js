
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = { 
    entry: {
        app: "./src/app.tsx"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
      },
    module: { 
        rules: [ 
            { 
           /*test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                    {
                    loader: require.resolve('babel-loader'),
                    options: {
                        plugins: [require.resolve('react-refresh/babel')],
                        },
                    },    
                ],*/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
            },
        ], 
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        scriptLoading: "blocking",
        hash: true, }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css",
            }),
    ], 
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
    }
};