const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const cssLoader = require("@webpack/basics/webpack/loaders/css.loader");
const babelLoader = require("@webpack/basics/webpack/loaders/babel.loader");
const fileLoader = require("./webpack/loaders/file.loader");
const svgLoader = require("./webpack/loaders/svg.loader");
const { DefinePlugin } = require("webpack");

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

  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json"],
    plugins: [
      new ModuleScopePlugin(path.resolve(__dirname, "src"), [
        path.resolve(__dirname, "package.json"),
      ]),
    ],
    symlinks: false,
    cacheWithContext: false,
    fallback: {
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      process: "process/browser",
    },
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [cssLoader(), babelLoader(), fileLoader(), svgLoader()],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new DefinePlugin({ TEST: JSON.stringify("test") }),
  ],
};
