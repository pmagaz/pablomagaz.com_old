import React  from 'react';
import { PropTypes } from 'prop-types';
import * as styles from './styles.css';
import Menu from 'components/Menu';
import Social from 'components/Social';

import LinkButton from 'components/LinkButton';
const Footer = () => (
  <footer className={ styles.container }>
      <Menu />
    <div className={ styles.copyright }>
    © 2017 Pablo Magaz. All rights reserved. 
    </div>
    <Social />
  </footer>
);

export default Footer;