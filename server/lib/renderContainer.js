import React from 'react';
import lruChache from 'lru-cache';
import { Provider } from 'react-redux';
import ReactRender from 'fast-react-render';
import { RouterContext } from 'react-router';

const cache  = lruChache({
  max: 500,
  maxAge: 1000 * 60 * 60
});

const renderContainer = (store, renderProps) => (
  ReactRender.elementToString(
    <Provider store={ store }>
      <RouterContext { ...renderProps } />
    </Provider>, { cache })
);

export default renderContainer;