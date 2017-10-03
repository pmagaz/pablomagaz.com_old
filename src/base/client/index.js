import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { useScroll } from 'react-router-scroll';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';

import { trackGa } from 'base';
import InitialState from 'store/InitialState';
import ConfigureStore from 'store/ConfigureStore';
import routes from '../routes';

const store = ConfigureStore(browserHistory, InitialState);

hydrate(
  <Provider store={ store }>
    <Router
      routes={ routes }
      history={ browserHistory }
      onUpdate={ () => trackGa() }
      render={ applyRouterMiddleware(useScroll()) }
    />
  </Provider>,
  document.getElementById('root')
);
