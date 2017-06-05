import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Blog from '../';

describe('Components', () => {
  describe('Blog component', () => {

    it('Should has properties', () => {

      const component = mount(<Blog  name="Blog"/>);
      expect(component.props().name).to.equal("Blog");

    });
  });
});
