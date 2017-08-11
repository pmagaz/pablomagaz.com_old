import React  from 'react';
import { PropTypes } from 'prop-types';

import SocialIcon from 'components/SocialIcon';
import styles from './styles.css';

const Social = () => (
    <div className={ styles.socialBox }>
      <SocialIcon className= { styles.linkedin } />
      <SocialIcon className= { styles.twitter } />
      <SocialIcon className= { styles.email } />
  </div>
);

export default Social;