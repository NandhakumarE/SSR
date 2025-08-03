const path = require('path');
module.exports = {
  mode: "development",

  entry: "./src/client",

  // this bundle should be available to public to serve it static resource.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  // Enable source maps for better debugging
  devtool: "source-map",

  // Configure how different file types should be handled
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react", // To compile JSX
              "@babel/preset-env", // To compile modern JS
            ],
          },
        },
      },
    ],
  },

  // Resolve both .js and .jsx so you can import without extensions
  resolve: {
    extensions: [".js", ".jsx"],
  },

  stats: {
    errorDetails: true,
  },
};
