const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROXY_PORT = 3000;

module.exports = {
  // The entry point such as /src/index.js which is like the default
  // for webpack 4, is what Webpack will use to start building out/resolving
  // its dependencies.
  entry: './src/client.tsx',
  // Resolve file extensions with .tsx, .ts and .js
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  // The output property such as ./dist (default for Webpack 4)
  // tells Webpack where to output the bundles it creates and
  // how to name them.
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  module: {
    // All files with the extension .tsx or .ts should be processed
    // by ts-loader
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  // Set of plugins used in the development/packaging of this application
  plugins: [
    // Helps simplify the creation of HTML files to help
    // serve our Webpack bundles
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // This set of options is picked up by webpack-dev-server and can be used to
  // change its behavior in various ways. Here's a simple example that gzips and
  // serves everything from our dist/ directory in the project root
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    // default port set by webpack-dev-server; can be overridden as needed
    port: 8080,
    // Contains a mapping of the URLs for us to proxy to in the down
    // stream server. Ideally, endpoints are namespaced appropriately (typically
    // by service name) this way all requests associated with a particular
    // can be forwarded to a specific service. In this example, we proxy to the
    // code in the @typescript-react-server-starter/server package.
    proxy: {
      '/': {
        target: `http://localhost:${PROXY_PORT}`,
        secure: false
      }
    }
  }
}
