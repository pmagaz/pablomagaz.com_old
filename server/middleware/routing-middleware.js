import { match } from 'react-router';

import { fetchRequiredActions, context } from 'base';
import routes from '../../src/base/routes';
import renderPage from '../lib/renderPage';
import errorPage from '../lib/errorPage';
import contentNotFound from '../lib/contentNotFound';
import renderContainer from '../lib/renderContainer';
import configureServerStore from '../lib/configureStore';

export default function routingMiddleware(req, res) {

  const store = configureServerStore();

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) return res.status(404).send(errorPage(404));
    if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    if (renderProps == null) return res.status(404).send(errorPage(404));
    fetchRequiredActions(store.dispatch, renderProps.components, renderProps.params, context.context)
      .then(() => {
        if (contentNotFound(renderProps, store)) return res.status(404).send(errorPage(404));
        else {
          const routeMatch = renderProps.location.pathname;
          const renderedContainer = renderContainer(store, renderProps);
          const page = renderPage(routeMatch, renderedContainer, store);
          return res.status(200).send(page);
        }
      }).catch(err => {
        res.status(500).send(errorPage(500));
      });
  });
}
