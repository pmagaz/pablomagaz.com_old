import path from 'path';
import fs from 'fs';
import { env, SiteConf } from 'base';
const SslOptions = () => {
  if (SiteConf.Ssl) {
    console.log(4444);
    const key = path.resolve(__dirname, '../keys/96427102-www.pablomagaz.com.key');
    const cert = path.resolve(__dirname, '../keys/96427102-www.pablomagaz.com.cert');
    return {
      key: fs.readFileSync(key),
      cert: fs.readFileSync(cert)
    };
  } else return false;
};

export default SslOptions;