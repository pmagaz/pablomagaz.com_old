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
      onNewComment={ newCommentHandler }
      shortname={ SiteConf.DisqusSettins.shortName }
      identifier={ SiteConf.DisqusSettins.identifier + post.slug }
    />
  );
};

PostComments.propTypes = propTypes;

export default PostComments;