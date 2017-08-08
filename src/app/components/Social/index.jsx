import React  from 'react';
import { PropTypes } from 'prop-types';

import LinkButton from 'components/LinkButton';
import styles from './styles.css';

/*
MOVE SVG TO CORRECT PLACE :) 
*/
const Social = () => (
    <div className={ styles.socialBox }>
          <LinkButton/>
          <LinkButton/>
          <LinkButton/>
  </div>
);

export default Social;