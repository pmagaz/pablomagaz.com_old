import path from 'path'
import chalk from 'chalk'
import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import baseWpPlugins from '../src/base/wp-plugins'

export const mainPath = path.resolve(__dirname, '..')
export const context = path.resolve(__dirname, '../')
export const buildPath = path.resolve(__dirname, '../dist')
export const basePath = path.resolve(__dirname, '../src/base')
export const dllPath = path.resolve(__dirname, '../dist/dlls')
export const assetsPath = path.resolve(__dirname, '../dist/assets')
export const clientPath = path.resolve(__dirname, '../src/base/client/')
export const manifestPath = buildPath

export const entry = {
  vendor: [
    'react',
    'redux',
    'prismjs',
    'react-ga',
    'react-dom',
    'recompose',
    'immutable',
    'prop-types',
    'classnames',
    'react-redux',
    'react-share',
    'react-router',
    'babel-polyfill',
    'isomorphic-fetch',
    'html-react-parser',
    'react-disqus-comments',
    'react-router-scroll/lib/useScroll',
  ]
}

export const module = {
  rules: [
    { test: /\.json$/, loader: 'json-loader', include: [mainPath] },
    { test: /\.html/, loader: 'raw-loader', include: [mainPath] },
    { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=100000&name=assets/images/[name].[ext]' },
    
  ]
}

export const plugins = [
  new ProgressBarPlugin({
    format: `[BASE] ${chalk.blue('i')} Bundling... [:bar] ${chalk.green(':percent')} (:elapsed seconds)`,
    clear: true,
    summary: false,
  }),
  new AssetsPlugin({
    path: buildPath,
    filename: 'webpack-assets.json',
    prettyPrint: true
  }),
  new baseWpPlugins.compileInfoPlugin(),
  new webpack.ContextReplacementPlugin(
    /highlight\.js\/lib\/languages$/,
    new RegExp(`^./(${['javascript'].join('|')})$`),
  )
]

export const postcss = [
  require('postcss-import')(),
  require('postcss-url')(),
  require('postcss-modules-extract-imports'),
  require('postcss-nested')(),
  require('postcss-reporter')(),
  require('precss')(),
  require('postcss-mixins')(),
]

export const resolve = {
  extensions: ['.js', '.jsx', '.css'],
  modules: ['node_modules'],
  alias: {
    'app': path.resolve(__dirname, '../src/app'),
    'base': path.resolve(__dirname, '../src/base'),
    'store': path.resolve(__dirname, '../src/base/store'),
    'styles': path.resolve(__dirname, '../src/app/styles'),
    'mocks': path.resolve(__dirname, '../server/api/mocks'),
    'containers': path.resolve(__dirname, '../src/app/containers'),
    'components': path.resolve(__dirname, '../src/app/components')
  }
}