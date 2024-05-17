const path = require("path");
// this plug in generates an html file with a script tag after bundling all js i guess 
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
};
