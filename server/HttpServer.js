import spdy from 'spdy';
import base, { SiteConf } from 'base/';
import envConf from './enviroment';
import SslOptions from './lib/ssl';

const HttpServer = app => {

  let server;
  if (!SiteConf.Ssl) server = app;
  else server = spdy.createServer(SslOptions(), app);

  server.listen(envConf.port, (err) => {
    if (err) return base.console.error(`${err}`);
    base.console.success(`HTTP Server up on http://localhost:${envConf.port}`);
  });
};

export default HttpServer; 