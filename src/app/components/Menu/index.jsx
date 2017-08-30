import React  from 'react';
import { pure } from 'recompose';

import LinkButton from 'components/LinkButton';
import styles from './styles.css';
  
const Menu = () => {
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
      </ul>
    </nav>
  );
};

export default pure(Menu);
