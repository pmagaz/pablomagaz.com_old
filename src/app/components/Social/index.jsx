import React  from 'react';

import { SiteConf } from 'base';
import SocialIcon from 'components/SocialIcon';
import styles from './styles.css';

const Social = () => (
  <ul className={ styles.socialBoxWrap }>
    <li>
      <a href={ SiteConf.socialLinks.linkedIn } target="_blank">
        <SocialIcon />
      </a>
    </li>
    <li>
      <a href={ SiteConf.socialLinks.github } target="_blank">
        <SocialIcon />
      </a>
    </li>
    <li>
      <a href={ SiteConf.socialLinks.twitter } target="_blank">
        <SocialIcon />
      </a>
    </li>
    <li>
      <a href={ `mailto:${SiteConf.socialLinks.gmail}` } target="_blank">
        <SocialIcon />
      </a>
    </li>
  </ul>
);

export default Social;