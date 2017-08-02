import React  from 'react';
import { PropTypes } from 'prop-types';
import LinkButton from 'components/LinkButton';

const propTypes= {
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number
};

const Logo = ( props ) => (
  
    <LinkButton
      location="/"
      value="PM Logo"
  />

);

Logo.propTypes= propTypes;

export default Logo;
