const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/javascript/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/index.html"],
    },
    plugins: [
        new HtmlWebPackPlugin ({
            template: "./src/index.html",
        })
    ],
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },
        ],
    },
};