const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const cssLoader = require("@webpack/basics/webpack/loaders/css.loader");
const babelLoader = require("@webpack/basics/webpack/loaders/babel.loader");
const fileLoader = require("./webpack/loaders/file.loader");
const svgLoader = require("./webpack/loaders/svg.loader");

module.exports = {
  devServer: {
    open: true,
  },
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  module: {
    rules: [cssLoader(), babelLoader(), fileLoader(), svgLoader()],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
