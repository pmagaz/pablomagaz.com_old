import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

const propTypes = {
  value: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
/*
const goTo = (location) => {

  if (~location.indexOf('/')) {
    browserHistory.push(location) 
  }
  else {
    const section = document.querySelector(`${location}`)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
    else browserHistory.push(`/${location}`) 
  }
} */

const LinkButton = ({ location, value }) => (
  <Link to={ `${ location }` }>
    { value }
  </Link>
);

LinkButton.propTypes = propTypes;

export default LinkButton;