import base  from '../src/base/';
import routingMiddleware from './middleware/routing-middleware';

import { postApiHandler } from './api/post';
import { postsApiHandler } from './api/posts';

const applyServerRouting = (app) => {
 
  if (base.env == 'production') {
    app.all('*', (req, res, next) => {
      if (req.secure) return next();
      res.redirect('https://'+req.hostname + ':' + app.get('secPort') + req.url);
    });
  }
  
  app.route('/api/posts/:page?')
    .get(postsApiHandler);
  
  app.route('/api/post/:slug')
    .get(postApiHandler);
  
  app.use(routingMiddleware);
  base.console.success(`Routing up`);
};

export default applyServerRouting;

