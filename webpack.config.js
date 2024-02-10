const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/main.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "./src/scss"),
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
    s,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: false,
  },

  mode: "development",
};
