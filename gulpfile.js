const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefix = require('gulp-autoprefixer')
const sassLint = require('gulp-sass-lint')
const browserSync = require('browser-sync').create()
const webpack = require('webpack')
const webpackStream = require('webpack-stream')

const styles = [
  'styles/styles.scss',
  'styles/buysellads.scss',
  'styles/carbon-ads.scss',
  'styles/codefund.scss'
]

gulp.task('sass', ['sass-lint'], (cb) => {
  return gulp.src(styles)
    .pipe(sass())
    .pipe(autoprefix())
    .pipe(gulp.dest('styles'))
})

gulp.task('sass-lint', () => {
  return gulp.src(styles)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})

gulp.task('default', ['sass'])

gulp.task('watch', () => {
  browserSync.init({
    port: 8080,
    notify: false,
    reloadOnRestart: true,
    https: false,
    server: ['./']
  })

  gulp.watch([
    'src/app.js'
  ]).on('change', () => {
    return gulp.src('src/app.js')
      .pipe(webpackStream({
        entry: ['babel-polyfill', './src/app.js'],
        output: {
          filename: 'bundle.js'
        },
        module: {
          rules: [
            {
              test: /\.js?$/,
              exclude: /(node_modules)/,
              use: 'babel-loader'
            },
            {
              test: /\.css?$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            }
          ]
        },
        plugins: [
          new webpack.ProvidePlugin({
            'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
          })
        ],
        mode: 'production'
      }))
      .pipe(gulp.dest('dist/'))
  })

  gulp.watch([
    'index.html',
    'js/bundle.js',
    'styles/*.css'
  ]).on('change', browserSync.reload)

  gulp.watch([
    'styles/*.scss'
  ], ['sass'])
})
