const path = require("path");
module.exports = {
  // We're building for Node.js, not for the browser
  target: 'node',

  mode:'development',

  // Entry point of your SSR application
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'), // <-- fixed 'resole' to 'resolve'
  },

  // Enable source maps for better debugging
  devtool: 'source-map',

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
    errorDetails: true
  }
};
