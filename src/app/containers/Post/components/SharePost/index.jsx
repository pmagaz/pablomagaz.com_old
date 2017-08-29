import React  from 'react';
import { PropTypes } from 'prop-types';

import { SiteConf } from 'base';
import SocialIcon from 'components/SocialIcon';
import styles from './styles.css';

const SharePost = ({ post }) => {

  const postUrl = `${SiteConf.BlogUrl}${post.slug }`;
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=[${SiteConf.BlogTitle}] ${post.title}&summary=${post.meta_description}&source=${SiteConf.BlogTitle}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=[${SiteConf.BlogTitle}] ${post.title}&url=${postUrl}&related=${SiteConf.BlogTitle}`;

  return (<div className={ styles.share }>
      <ul className={ styles.socialBoxWrap }>
      <li>
        <a href={linkedInUrl} target="_blank">
        <SocialIcon />
        </a>
      </li>
      <li>
        <a href={twitterUrl} target="_blank">
        <SocialIcon />
        </a>
      </li>
  </ul>
  </div>);
};

export default SharePost;