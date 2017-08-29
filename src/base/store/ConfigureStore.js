import { createLogger } from 'redux-logger';
import reduxReqMiddleware from 'redux-req-middleware';
import { createStore, compose, applyMiddleware } from 'redux';

import base from 'base/';
import rootReducer from '../reducers';

function configureStore(history, initialState) {

  let middleware;
  const loggerMiddleware = store => next => action => {
    // Mostramos en la consola el type de la accción y el timestamp
    console.log(`Action dispatched: ${action.type}, Time: ${+new Date()}`);
    // Devolvemos la acción para que continue el flujo habitual
    return next(action);
  };

  if (base.env === 'development') {
    middleware = applyMiddleware(
      loggerMiddleware,
      reduxReqMiddleware(),
      createLogger({ level: 'info', collapsed: true }),
    );
  } else {
    middleware = applyMiddleware(
      reduxReqMiddleware()
    );
  }

  const enhancer = compose(middleware);
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
