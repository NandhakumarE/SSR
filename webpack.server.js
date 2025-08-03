const path = require("path");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");
const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
  // We're building for Node.js, not for the browser
  target: 'node',

  // Entry point of your SSR application
  entry: './src/server.js',

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'), // <-- fixed 'resole' to 'resolve'
  },
  /*
  Root Cause: Libraries like Express are already installed on the server in node_modules havinf dynamic import require(some), webpack can't resolve at runtime.

  Solution: nodeExternals() creates a list of all node_modules in your project and  webpack will skip bundling them.

  Node.js can already require them(node_modules) directly at runtime.
  
  because of this, bundle size reduced from 1.5MB to 1.45KB

  script to check

  npx webpack --config webpack.server.js --json > stats.json
  npx webpack-bundle-analyzer stats.json

  On server bundling, this is perfect because Node.js can require those packages at runtime.
  On client bundling, browsers cannot load node_modules dynamically using require().
  */
  externals:[nodeExternals()]
});

