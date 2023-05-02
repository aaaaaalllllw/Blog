const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolveLoader: {
    //找loader的时候，先去loaders目录下找，找不到再去node_modules下面找
     modules: ["loaders", "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
      "c-loader", "b-loader",   "a-loader"
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};