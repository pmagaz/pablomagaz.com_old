import { SiteConf, context  } from 'base'

export const trackGa = () => {
  if (context.client) {
    const ReactGA = require('react-ga')
    ReactGA.initialize(SiteConf.GoogleAnaliticsId)
    ReactGA.set({ page: window.location.pathname + window.location.search })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
}