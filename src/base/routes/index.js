import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App/';
import Blog from 'containers/Blog/';
import Main from 'containers/Main/';
import Post from 'containers/Post/';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Main } />
    <Route path="/main" component={ Main } />
    <Route path="/blog" component={ Blog } />
    <Route path="/tag/:tag" component={ Blog } />
    <Route path="/blog/:slug" component={ Post } />
    <Route path="/blog/page/:page" component={ Blog } />
  </Route>
);

export default routes;
