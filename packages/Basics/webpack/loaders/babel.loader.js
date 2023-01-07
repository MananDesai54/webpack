module.exports = () => ({
  test: /\.js$/,
  use: [{ loader: "babel-loader" }],
  exclude: /node_modules/,
});
