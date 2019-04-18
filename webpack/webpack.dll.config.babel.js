import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';

import * as common from './webpack.common.config';

export const cache = true;
export const devtool = 'eval';
export const { entry } = common;
export const { context } = common;
export const { resolve } = common;

export const output = {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].dll.js'
};

export const module = {
  loaders: [
    {
      test: [/\.jsx?$/],
      include: [/src/],
      loader: 'babel-loader',
      exclude: [/node_modules/, /dist/, /server/],
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-0', 'react']
      }
    }
  ]
};

export const plugins = [
  new webpack.DllPlugin({
    path: path.join(common.dllPath, '[name]-manifest.json'),
    name: '[name]'
  }),
  new AssetsPlugin({
    path: common.buildPath,
    filename: 'webpack-assets.json',
    prettyPrint: true
  })
].concat(common.plugins);
