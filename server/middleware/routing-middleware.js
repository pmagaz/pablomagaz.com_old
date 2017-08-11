import { match } from 'react-router';

import { fetchRequiredActions, context } from 'base';
import routes from '../../src/base/routes';
import renderPage from '../lib/renderPage';
import postNotFound from '../lib/postNotFound';
import renderContainer from '../lib/renderContainer';
import configureServerStore from '../lib/configureStore';

export default function routingMiddleware(req, res) {

  const store = configureServerStore();

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) return res.status(500).send(error.message);
    if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    if (renderProps == null) return res.status(404).send('Not found');
    const startRequired = Date.now();
    fetchRequiredActions(store.dispatch, renderProps.components, renderProps.params, context.context)
      .then(() => {
        if (postNotFound(renderProps, store)) return res.status(404).send('Not found');
        else {
          console.log('fetchRequired', Date.now() - startRequired);
          const startContainer = Date.now();
          const routeMatch = renderProps.location.pathname;
          const renderedContainer = renderContainer(store, renderProps);
          console.log('renderContainer', Date.now() - startContainer);
          const startPage = Date.now();
          const page = renderPage(routeMatch, renderedContainer, store);
          console.log('renderPage', Date.now() - startPage);
          return page;
        }
      })
      .then(page => res.status(200).send(page))
      .catch(err => {
        console.log('SERVER ERROR!', err);
        res.status(500).send('Internal Server Error');
      });
  });
}
