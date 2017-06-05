import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Contact from '../';

describe('Components', () => {
  describe('Contact component', () => {

    it('Should has properties', () => {

      const component = mount(<Contact  name="Contact"/>);
      expect(component.props().name).to.equal("Contact");

    });
  });
});
