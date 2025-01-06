const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
entry: "./src/index.js",
devtool: "eval-source-map",
devServer: {
watchFiles: ["./src/template.html"],
},
plugins: [
    new HtmlWebpackPlugin({
    template: "./src/template.html",
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: "./src/images", to: "images" },
        ],
    }),
],
module: {
    rules: [
    {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    },
    {
        test: /\.html$/i,
        loader: "html-loader",
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
            filename: 'images/[name][ext]',
        },
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'webfonts/[name][ext]',
        },
    },
    ],
},
};
