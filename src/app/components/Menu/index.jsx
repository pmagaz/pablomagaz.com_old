import React  from 'react';
import { PropTypes } from 'prop-types';

import * as styles from './styles.css';
import LinkButton from 'components/LinkButton';
  
const Menu = (props) => {
  return (
    <nav className={ styles.navMenu }>
      <ul>
        <li>
          <LinkButton
            location="/"
            value="Home"
          />
        </li>
         <li>
         <LinkButton
          location="/blog"
          value="Blog"
        />
        </li>
        <li>
          <LinkButton
            location="#about"
            value="Sobre mi"
          />
          </li>
        <li>
        <LinkButton
          location="#contact"
          value="Contacto"
        />  
        </li>
          <li>
            <a href="https://github.com/pmagaz/pablomagaz.com">Source Code</a>
        </li>
      </ul>
    </nav>
  )
};

export default Menu;
