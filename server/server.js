import express from 'express';

import base from 'base/';
import HttpServer from './HttpServer';
import HttpsServer from './HttpsServer';
import applyServerRouting from './routing';
import applyStaticsPaths from './statics';
import applyEnvMiddleWare from './middleware';

const app = express();

const launchServer = () => {
  applyEnvMiddleWare(app)
    .then(() => {
      base.console.info(`Checking static paths...`);
      applyStaticsPaths(app);
    })
    .then(() => {
      base.console.info(`Checking server routing...`);
      applyServerRouting(app);
    })
    .then(() => {
      base.console.info(`Setting up server...`);
      HttpServer(app);
      if (base.env == 'production') HttpsServer(app);
    })
    .catch((e) => {
      base.console.error(`Server Error ${e}...`);
    });
};

launchServer();