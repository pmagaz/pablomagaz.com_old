import React  from 'react';
import { PropTypes } from 'prop-types';

import { SiteConf } from 'base';
import SocialIcon from 'components/SocialIcon';
import styles from './styles.css';

const goTo = (url) => {
  window.location = url;
}

const mailTo = (url) => {
  mailto: url;
}

const Social = () => (
    <ul className={ styles.socialBoxWrap }>
      <li>
        <a href={SiteConf.socialLinks.github}>
        <SocialIcon />
        </a>
      </li>
      <li>
        <a href={SiteConf.socialLinks.linkedin}>
        <SocialIcon />
        </a>
      </li>
      <li>
        <a href={SiteConf.socialLinks.twitter}>
        <SocialIcon />
        </a>
      </li>
           <li>
        <a href={`mailto:${SiteConf.socialLinks.gmail}`}>
        <SocialIcon />
        </a>
      </li>
  </ul>
);

export default Social;