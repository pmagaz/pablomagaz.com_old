import * as templates from '../templates/';
import { getScripts, getStyles } from '../lib/files';

export default function renderPage(routeMatch, container, store) {

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
  else template = route[0] === 'blog' ? templates.post : templates.tag;

  if (routeMatch === '/' || !template) return templates.main(params);
  else return template(params);

}
