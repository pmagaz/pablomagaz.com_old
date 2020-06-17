import base from '../src/base';
import routingMiddleware from './middleware/routing-middleware';

import { postApiHandler } from './api/post';
import { rssHandler } from './api/rss';
import { postsApiHandler, relatedPostApiHandler } from './api/posts';

const applyServerRouting = app => {
  app.route('/api/posts/:filter*?').get(postsApiHandler);
  app.route('/api/related/:slug/:tag/:tag2?').get(relatedPostApiHandler);
  app.route('/api/post/:slug').get(postApiHandler);
  app.route('/rss').get(rssHandler);
  
  app.use(routingMiddleware);
  base.console.success('Routing up');
};

export default applyServerRouting;
