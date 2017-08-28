import React  from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

const propTypes= {
  fn: PropTypes.function
};


const SocialIcon = ({ fn }) => {
  return (
    <button className={ styles.SocialIcon } onClick={ fn }>
    </button>
  )
};

export default SocialIcon;