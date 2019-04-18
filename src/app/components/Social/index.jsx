import React from 'react';
import { pure } from 'recompose';

import { SiteConf } from 'base';
import SocialIcon from 'components/SocialIcon';
import styles from './styles.css';

const Social = () => (
  <ul className={ styles.socialBoxWrap }>
    <li>
      <a href={ SiteConf.socialLinks.linkedIn } target="_blank" rel="noopener noreferrer">
        <SocialIcon />
      </a>
    </li>
    <li>
      <a href={ SiteConf.socialLinks.github } target="_blank" rel="noopener noreferrer">
        <SocialIcon />
      </a>
    </li>
    <li>
      <a href={ SiteConf.socialLinks.twitter } target="_blank" rel="noopener noreferrer">
        <SocialIcon />
      </a>
    </li>
    <li>
      <a href={ `mailto:${ SiteConf.socialLinks.gmail }` } target="_blank" rel="noopener noreferrer">
        <SocialIcon />
      </a>
    </li>
  </ul>
);

export default pure(Social);