import * as https from 'https';

import base, { SiteConf } from 'base/';
import envConf from './enviroment';
import SslOptions from './lib/ssl';

const HttpsServer = app => {
  if (base.env == 'production' && SiteConf.Ssl) {
    const httpsServer = https.createServer(SslOptions(), app);
    httpsServer.listen(envConf.sslPort, (err) => {
      if (err) return base.console.error(`${err}`);
      base.console.success(`HTTPS Server up on http://localhost:${envConf.sslPort}`);
    });
  }
};

export default HttpsServer; 