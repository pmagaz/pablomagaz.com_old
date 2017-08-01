import React  from 'react';
import { PropTypes } from 'prop-types';
import LinkButton from 'components/LinkButton';

const propTypes= {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

const Logo = ( props ) => (
  <div>
    <LinkButton
      location="/"
      value="PM Logo"
  />
  </div>
);

Logo.propTypes= propTypes;

export default Logo;
