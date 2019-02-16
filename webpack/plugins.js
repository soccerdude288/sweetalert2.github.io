const path = require('path')
const _MiniCssExtractPlugin = require('mini-css-extract-plugin')
const _StyleLintPlugin = require('stylelint-webpack-plugin')

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].bundle.css',
  chunkFilename: '[id].css'
})

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/css'),
  files: '**/*.css',
  failOnError: false,
  quiet: false,
})

    // new webpack.ProvidePlugin({
    //   'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    // })

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin
};
