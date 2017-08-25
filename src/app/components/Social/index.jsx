import React  from 'react';
import { PropTypes } from 'prop-types';

import SocialIcon from 'components/SocialIcon';
import styles from './styles.css';

const Social = () => (
    <ul className={ styles.socialBoxWrap }>
      <li><SocialIcon/></li>
      <li><SocialIcon/></li>
      <li><SocialIcon/></li>
      <li><SocialIcon/></li>
  </ul>
);

export default Social;