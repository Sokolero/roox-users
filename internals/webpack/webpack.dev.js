const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname + "build"),
    filename: "[name].bundle.js"
  },
  devServer: {
    port: 3000
  },
  mode: "development",
  devtool: "inline-cheap-source-map",
}
