import request from 'request';
import base from '../src/base/';
import routingMiddleware from './middleware/routing-middleware';

import { postApiHandler } from './api/post';
import { postsApiHandler } from './api/posts';


export default function applyServerRouting(app) {
  app.route('/api/posts/:page?')
    .get(postsApiHandler);
  
  app.route('/api/post/:slug')
    .get(postApiHandler);
    
  app.use(routingMiddleware);
  base.console.success(`Routing up`);
}