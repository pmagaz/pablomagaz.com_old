import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App/';
import Blog from 'containers/Blog/';
import Main from 'containers/Main/';
import Post from 'containers/Post/';
import About from 'containers/About/';
import Contact from 'containers/Contact/';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Main } />
    <Route path="/about" component={ About } />
    <Route path="/blog" component={ Blog } />
    <Route path="/blog/:slug" component={ Post } />
    <Route path="/contact" component={ Contact } />
    <Route path="/main" component={ Main } />
  </Route>
);

export default routes;
