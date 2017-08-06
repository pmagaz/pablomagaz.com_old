import React  from 'react';
import { PropTypes } from 'prop-types';
import LinkButton from 'components/LinkButton';
import styles from './styles.css';

const propTypes= {
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number
};

const Logo = ( props ) => (
  <LinkButton
      location="/"
      value="PM"
    />
);

Logo.propTypes= propTypes;

export default Logo;
