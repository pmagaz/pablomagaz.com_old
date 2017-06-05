import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { generateMap } from 'base/shared/ModelHelper';

import { ContactModel, setInitialState } from '../models';
import { Contact } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,ContactModel );

function setup() {

  function dispatch() { }
  let initialState = {
      Contact: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    ContactModel: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Contact {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('Contact', () => {
   /* it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('Contact');

    });*/
  });
});