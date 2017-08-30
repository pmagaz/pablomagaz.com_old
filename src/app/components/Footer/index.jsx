import React  from 'react';
import { pure } from 'recompose';

import Menu from 'components/Menu';
import styles from './styles.css';

const Footer = () => (
  <footer className={ styles.container }>
    <Menu />
    <div className={ styles.copyright }>
      <span>© 2017</span>
      <span> Pablo Magaz.</span>
      <span> All rights reserved. </span>
    </div>
    <div className={ styles.powered }>
      powered by:
    </div>
  </footer>
);

export default pure(Footer);
