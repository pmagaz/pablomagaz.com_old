import React from 'react';
import { PropTypes } from 'prop-types';
import RenderOnScroll from 'components/RenderOnScroll';
import PostComments from '../PostComments';
import SharePost from '../SharePost';
import RelatedPost from '../RelatedPost';

const propTypes = {
  post: PropTypes.object.isRequired
};

const PostFooter = ({ post }) => {
  return (
    <div>
      <SharePost post={ post } />
      <RenderOnScroll scroll={ 3000 } >
        <RelatedPost related={ post.related } />
        <PostComments post={ post } />
      </RenderOnScroll>
    </div>
  );
};

PostFooter.propTypes = propTypes;

export default PostFooter;