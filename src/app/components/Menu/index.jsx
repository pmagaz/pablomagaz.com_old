import React  from 'react';
import { PropTypes } from 'prop-types';

import LinkButton from 'components/LinkButton';
const Menu = () => (
  <div>
    <LinkButton
      location="/"
      value="PM"
    />
    <nav>
      <ul>
        <li>
         <LinkButton
          location="/#about"
          value="About"
        />
        </li>
        <li>
        <LinkButton
          location="/#contact"
          value="Contact"
        />
        </li>
        <li>
          <LinkButton
            location="/blog"
            value="Blog"
          />
        </li>
      </ul>
    </nav>
  </div>
);

export default Menu;
