import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { generateMap } from 'base/shared/ModelHelper';

import { AboutModel, setInitialState } from '../models';
import { About } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,AboutModel );

function setup() {

  function dispatch() { }
  let initialState = {
      About: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    AboutModel: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<About {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('About', () => {
   /* it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('About');

    });*/
  });
});