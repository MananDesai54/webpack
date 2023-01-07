const path = require("path");

// Plugins

// Loads HTML File
// Inject the bundle to that HTML file
const HTMLWebpackPlugin = require("html-webpack-plugin");

// Loaders
// to load Stylesheet from DOM and load css file with import
const cssLoader = require("./webpack/loaders/css.loader");
// to load Stylesheet from DOM, load css file as module and load scss file via import
const scssLoader = require("./webpack/loaders/scss.loader");
// to Transpile JS to run in modern browsers
const babelLoader = require("./webpack/loaders/babel.loader");

module.exports = {
  devServer: {
    open: true,
  },
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "source", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [cssLoader(), scssLoader(), babelLoader()],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "source", "index.html"),
    }),
  ],
};
