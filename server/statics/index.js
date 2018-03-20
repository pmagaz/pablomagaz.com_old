import path from 'path'
import express from 'express'

import base, { SiteConf } from 'base'

const commonStatics = () => [
  { route: '/dist', dir: path.join(__dirname, '../../dist') },
  { route: '/serviceWorker.js', dir: path.join(__dirname, '../../src/base/serviceWorkers/index.js') },
  { route: '/manifest.json', dir: path.join(__dirname, '../manifest.json') },
  { route: '/offline.html', dir: path.join(__dirname, '../templates/offline.html') },
]

const devStatics = () => [
  { route: '/', dir: path.join(__dirname, '../../src/app') },
  { route: '/dlls', dir: path.join(__dirname, '../../dist/') },
  { route: '/content', dir: path.resolve(SiteConf.ContentPath), cache: { maxage: 31557600 } }
]

const prodStatics = () => [
  { route: '/', dir: path.join(__dirname, '../../dist') },
  { route: '/tag/assets/', dir: path.join(__dirname, '../../dist/assets') },
]

const envStatics = (base.env === 'development') ?
  commonStatics().concat(devStatics()) : commonStatics().concat(prodStatics())

export default function applyStaticsPaths(app) {
  envStatics.map(function(staticPath) {
    app.use(staticPath.route, express.static(staticPath.dir, staticPath.cache))
    base.console.success(`Applied static path ${staticPath.route}`)
  })
}
