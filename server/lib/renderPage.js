import base from 'base';
import * as templates from '../templates/';
import { getScripts, getStyles } from '../lib/bundle';

export default function renderPage(routeMatch, container, store){

  const params = {
    title: params,
    container: container,
    routeMatch: routeMatch,
    state: store.getState(),
    style: getStyles('app'),
    appScript: getScripts('app'),
    vendorScript: getScripts('vendor')
  };

  let template;
  let route = routeMatch.substring(1).split('/');

  if (route.length === 1) template = templates[route];
  else {
    if (route[1].length > 2) template = templates.post;
    else template = templates[route[0]];
  }

  if (routeMatch === '/' || !template) return templates.main(params);
  else return template(params);

}
