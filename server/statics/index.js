import path from 'path';
import express from 'express';

import base, { SiteConf } from 'base';

const commonStatics = () => [
];

const devStatics = () => [
  { route: '/', dir: path.join(__dirname, '../../src/app') },
  { route: '/dlls', dir: path.join(__dirname, '../../dist/') },
  { route: '/content', dir: path.resolve(SiteConf.ContentPath), cache: { maxage: 31557600 } }
];

const prodStatics = () => [
  { route: '/', dir: path.join(__dirname, '../../dist') },
  { route: '/assets', dir: path.join(__dirname, '../../dist/assets'), cache: { maxage: 31557600 }},
  { route: '/content', dir: path.resolve(SiteConf.ContentPath), cache: { maxage: 31557600 } }
];

const envStatics = (base.env === 'development') ?
  commonStatics().concat(devStatics()) : commonStatics().concat(prodStatics());

export default function applyStaticsPaths(app) {
  envStatics.map(function(staticPath) {
    app.use(staticPath.route, express.static(staticPath.dir, staticPath.cache));
    base.console.success(`Applied static path ${staticPath.route}`);
  });
}
