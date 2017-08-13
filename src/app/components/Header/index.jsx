import React  from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.css';

import Menu from 'components/Menu';
import Logo from 'components/Logo';

const propTypes= {
  location: PropTypes.object.isRequired
};

const Header = ({ location }) => {
return (
  <header className={ styles.mainHeader  }>
    <div className={ styles.mainHeaderWrapper }>
      <Logo location= { location } />
      <Menu />
      </div>
  </header>
);
};

Header.propTypes = propTypes;

export default Header;
