import React  from 'react';
import { pure } from 'recompose';
import { PropTypes } from 'prop-types';

import LinkButton from 'components/LinkButton';
import styles from './styles.css';
  
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
      </ul>
    </nav>
  )
};

export default pure(Menu);
