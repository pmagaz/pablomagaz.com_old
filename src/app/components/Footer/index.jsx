import React  from 'react';
import { pure } from 'recompose';
import { PropTypes } from 'prop-types';
import styles from './styles.css';

import Menu from 'components/Menu';
import Social from 'components/Social';

import LinkButton from 'components/LinkButton';

const Footer = () => (
  <footer className={ styles.container }>
      <Menu />
    <div className={ styles.copyright }>
      <span>© 2017</span>
      <span> Pablo Magaz.</span>
      <span> All rights reserved. </span>
    </div>
    <Social />
  </footer>
);

export default pure(Footer);
