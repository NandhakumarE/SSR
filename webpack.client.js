const path = require("path");
const merge = require("webpack-merge").default;
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
  entry: "./src/client",

  module:{
    rules:[
      {
        test: /\.css$/,
        exclude:/node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
  // this bundle should be available to public to serve it static resource.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
});
