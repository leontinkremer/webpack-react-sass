const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devConfig = {
  mode: "development",
  target: "web",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
  devServer: {
    open: true,
  },
};

module.exports = merge(commonConfig, devConfig);
