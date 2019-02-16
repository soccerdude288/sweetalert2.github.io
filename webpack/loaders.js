const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}

const CSSLoader = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
}

const PostCSSLoader = {
  test: /\.postcss$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname
        }
      },
    },
  ]
}

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc'
    },
  }
}

module.exports = {
  JSLoader,
  CSSLoader,
  PostCSSLoader,
  ESLintLoader
}
