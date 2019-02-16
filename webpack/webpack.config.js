const path = require('path')
const loaders = require('./loaders')
const plugins = require('./plugins')

module.exports = {
  entry: ['@babel/polyfill', './src/native.js', './src/app.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader,
      loaders.PostCSSLoader,
      loaders.ESLintLoader
    ]
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
  ],
  // mode: 'development'
  mode: 'production'
}
