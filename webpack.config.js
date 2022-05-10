const { merge } = require("webpack-merge");
const commonConfig = require("./internals/webpack/webpack.common");
const devConfig = require("./internals/webpack/webpack.dev");
const prodConfig = require("./internals/webpack/webpack.prod");

module.exports = (env, args) => {
  switch(args.mode) {
    case "development":
      return merge(commonConfig, devConfig);
    case "production":
      return merge(commonConfig, prodConfig);
    default:
      throw new Error("There is no matching configuration");
  }
}
