module.exports = () => ({
  test: /\.png$/,
  loader: "file-loader",
  options: { name: "[name].[ext]" },
});
