import React  from 'react';
import { PropTypes } from 'prop-types';

import SocialIcon from 'components/SocialIcon';
import styles from './styles.css';

const Social = () => (
    <div className={ styles.socialBoxWrap }>
      <SocialIcon/>
      <SocialIcon/>
      <SocialIcon/>
      <SocialIcon/>
  </div>
);

export default Social;