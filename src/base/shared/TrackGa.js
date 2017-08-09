import { SiteConf, context, env } from 'base';

export const trackGa = () => {
  if (env === 'production' && context.client) {
    const ReactGA = require('react-ga');
    ReactGA.initialize(SiteConf.GoogleAnaliticsId);
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
};