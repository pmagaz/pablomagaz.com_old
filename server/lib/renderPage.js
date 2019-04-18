import * as templates from '../templates';
import { getScripts, getStyles } from './files';

export default function renderPage(routeMatch, container, store) {
  const params = {
    title: params,
    container,
    routeMatch,
    state: store.getState(),
    style: getStyles('app'),
    appScript: getScripts('app'),
    vendorScript: getScripts('vendor')
  };

  let template;
  const route = routeMatch.substring(1).split('/');
  if (route.length === 1) template = templates[route];
  else template = route[0] === 'blog' ? templates.post : templates.tag;

  if (routeMatch === '/' || !template) return templates.main(params);
  return template(params);
}
