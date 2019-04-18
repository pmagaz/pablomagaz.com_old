import { createLogger } from 'redux-logger';
import reduxReqMiddleware from 'redux-req-middleware';
import { createStore, applyMiddleware } from 'redux';

import base from 'base/';
import rootReducer from '../reducers';

function configureStore(history, initialState) {

  let middleware;
  if (base.env === 'development') {
    middleware = applyMiddleware(
      reduxReqMiddleware(),
      createLogger({ level: 'info', collapsed: true }),
    );
  } else {
    middleware = applyMiddleware(
      reduxReqMiddleware()
    );
  }

  const store = createStore(rootReducer, initialState, middleware);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
