import base from 'base';
import getScripts  from '../lib/GetScripts';
import * as templates from '../templates/';

export default function renderPage(routeMatch, container, store){

  const params = {
    title: params,
    container: container,
    routeMatch: routeMatch,
    state: store.getState(),
    appScript: getScripts('app'),
    vendorScript: getScripts('vendor'),
    style: (base.env === 'production') ? '<link rel="stylesheet" href="/bundle.css">' : ''
  };

  let template;
  let route = routeMatch.substring(1).split('/');

  if (route.length === 1) template = templates[route];
  else {
    if(route[1].length > 2) template = templates.post;
    else template = templates[route[0]];
  }

  if (routeMatch === '/' || !template) return templates.main(params);
  else return template(params);

}
