import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import About from '../';

describe('Components', () => {
  describe('About component', () => {

    it('Should has properties', () => {

      const component = mount(<About  name="About"/>);
      expect(component.props().name).to.equal("About");

    });
  });
});
