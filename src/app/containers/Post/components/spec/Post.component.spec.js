import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Post from '../';

describe('Components', () => {
  describe('Post component', () => {

    it('Should has properties', () => {

      const component = mount(<Post  name="Post"/>);
      expect(component.props().name).to.equal("Post");

    });
  });
});
