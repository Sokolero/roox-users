const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: "[name]__[local]___[hash:base64:5]",                
              }

            }
          },
          "sass-loader"
        ],
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|)$/i,
        type: "asset/resource",
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({ template: "./src/index.html" })
  ],
}
