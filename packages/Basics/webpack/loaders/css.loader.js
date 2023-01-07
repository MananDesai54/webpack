module.exports = () => ({
  test: /\.css$/,
  use: ["style-loader", "css-loader"], // Order Matters as First Style Sheet from DOM is required as css-loader uses it it load style in JS
});
