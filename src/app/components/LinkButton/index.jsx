import { Link, browserHistory } from 'react-router';
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.css';

const propTypes = {
  value: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

const goTo = (location) => {
  
  if(!!~location.indexOf('/')) browserHistory.push(location); 
  else {
    const section = document.querySelector(`${location}`);
    if(section) section.scrollIntoView({ behavior: 'smooth' });
    else browserHistory.push(`/${location}`); 
  }
}

const LinkButton = ({ location, value }) => {
  return (
    <div className={ styles.LinkButton }
    onClick={() => goTo(location)}
    >
    <a href="javascript:void(0);">{value}</a>
    </div>
  );
};

LinkButton.propTypes = propTypes;

export default LinkButton;
