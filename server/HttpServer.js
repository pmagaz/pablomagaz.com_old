import spdy from 'spdy';
import base from 'base/';
import envConf from './enviroment';
import SslOptions from './lib/ssl';

const HttpServer = app => {
  spdy.createServer(SslOptions(), app).listen(envConf.port, (err) => {
    if (err) return base.console.error(`${err}`);
    base.console.success(`HTTP Server up on http://localhost:${envConf.port}`);
  });
};

export default HttpServer; 