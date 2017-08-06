import React  from 'react';
import { PropTypes } from 'prop-types';
import * as styles from './styles.css';

import LinkButton from 'components/LinkButton';

const Social = () => (
    <div className={ styles.socialBox }>
      <img src="../../assets/icons/linkedin.svg"/>
      <img src="../../assets/icons/twitter.svg"/>
      <img src="../../assets/icons/email.svg"/>
 </div>
);

export default Social;