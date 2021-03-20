const nodeExternals = require('webpack-node-externals')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // ...
  module: {
    rules: [
      // ... other rules
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  externals: {

  },
  devtool: 'inline-cheap-module-source-map',
  output: {
    // ...
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },

}