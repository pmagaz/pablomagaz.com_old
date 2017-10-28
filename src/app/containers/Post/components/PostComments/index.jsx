import React  from 'react';
import { PropTypes } from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import { SiteConf } from 'base';

const propTypes= {
  post: PropTypes.object.isRequired
};

const newCommentHandler = () => {
  console.log('new comment');
};

const PostComments = ({ post }) => {
  const postUrl = `${SiteConf.BlogUrl}/${post.slug }`;
  
  return (
    <ReactDisqusComments
      url={ postUrl }
      title={ post.title }
      identifier={ SiteConf.DisqusSettins.identifier }
      shortname={ SiteConf.DisqusSettins.shortName }
      onNewComment={ newCommentHandler }
    />
  );
};

PostComments.propTypes = propTypes;

export default PostComments;