import React from 'react';
import { PropTypes } from 'prop-types';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon } from 'react-share';

import { SiteConf } from 'base';
import styles from './styles.css';

const propTypes = {
  post: PropTypes.object.isRequired
};

const SharePost = ({ post }) => {

  const postUrl = `${ SiteConf.BlogUrl }/${ post.slug }`;
  const shareTitle = `${ post.title } @ ${ SiteConf.BlogTitle }`; 
  
  return (
    <article className={ styles.socialBoxWrap }>
      <span className={ styles.socialBoxWrapLinks }>
        <TwitterShareButton title={ post.title } via={ SiteConf.BlogTitle } description={ post.meta_description } url={ postUrl } > 
          <TwitterIcon round={ false } size={ 44 } />
        </TwitterShareButton>
        <LinkedinShareButton title={ shareTitle } description={ post.meta_description } url={ postUrl } > 
          <LinkedinIcon round={ false } size={ 44 } />
        </LinkedinShareButton>
        <WhatsappShareButton title={ shareTitle } url={ postUrl } > 
          <WhatsappIcon round={ false } size={ 44 } />
        </WhatsappShareButton>
        <FacebookShareButton url={ postUrl } quote={ shareTitle } >
          <FacebookIcon round={ false } size={ 44 }/>
        </FacebookShareButton>
        <EmailShareButton subject={ shareTitle } body={ post.meta_description } url={ postUrl } > 
          <EmailIcon round={ false } size={ 44 } />
        </EmailShareButton>
      </span>
    </article>
  );
};

SharePost.propTypes = propTypes;

export default SharePost;