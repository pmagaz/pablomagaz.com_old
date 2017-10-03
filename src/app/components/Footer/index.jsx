import React  from 'react';
import { pure } from 'recompose';

import { SiteConf } from 'base';
import Menu from 'components/Menu';
import styles from './styles.css';

const Footer = () => (
  <footer className={ styles.container }>
    <Menu />
    <div className={ styles.copyright }>
      <span>© 2017</span>
      <span> { SiteConf.Author }.</span>
      <span> All rights reserved. </span>
    </div>
    <a href="https://github.com/atSistemas/react-base" target="_blank" rel="noopener noreferrer">
      <div className={ styles.powered }>
        powered by:
      </div>
    </a>
  </footer>
);

export default pure(Footer);
