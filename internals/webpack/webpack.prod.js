const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname + "build"),
    filename: "[name].[contenthash].bundle.js"
  },
  mode: "production",
}
