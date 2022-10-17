const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main-[hash:8].css",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
