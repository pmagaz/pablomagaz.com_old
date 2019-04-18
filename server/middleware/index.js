import base from 'base';

const envMiddleware = base.env === 'development' ? require('./dev-middleware') : require('./prod-middleware');

export default function applyEnvMiddleWare(app) {
  base.console.info('Checking Env middlewares...');

  return new Promise(resolve => {
    let serverUp = false;

    envMiddleware().forEach((middleware) => {
      const middlewareName = middleware.name || 'middleware';
      app.use(middleware);

      if (base.env == 'production' && !serverUp) {
        serverUp = true;
        base.console.success(`Applied ${ middlewareName } middleware`);
        resolve(true);
      } else if (middleware.waitUntilValid) {
        middleware.waitUntilValid(() => {
          base.console.success(`Applied ${ middlewareName } middleware`);
          resolve(true);
        });
      }
    });
  });
}
