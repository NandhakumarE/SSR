const path = require("path");
const merge = require("webpack-merge").default;
const common = require("./webpack.common");


module.exports = merge(common, {
  entry: "./src/client",

  // this bundle should be available to public to serve it static resource.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
});
