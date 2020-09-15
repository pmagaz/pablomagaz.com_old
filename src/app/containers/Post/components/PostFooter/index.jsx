import React from 'react';
import { PropTypes } from 'prop-types';
import RenderOnScroll from 'components/RenderOnScroll';
import PostRegister from '../PostRegister';
import PostComments from '../PostComments';
import SharePost from '../SharePost';
import RelatedPost from '../RelatedPost';
import { setCookie, getCookie, SiteConf, context } from 'base';

const propTypes = {
  post: PropTypes.object.isRequired
};

const PostFooter = ({ post }) => {
  let postRegister;
  if (context.client) {
    let cookieMailSubscriptionOld = getCookie(SiteConf.cookieMailSubscriptionOld)
    let cookieMailSubscription = getCookie(SiteConf.cookieMailSubscription);
    if (cookieMailSubscriptionOld.length <= 5 || cookieMailSubscription.length <= 5) postRegister = <PostRegister />;
    else postRegister = null;
  }
  return (
    <div>
      <SharePost post={post} />
      { postRegister}
      <RenderOnScroll scroll={3000} >
        <RelatedPost related={post.related} />
        <PostComments post={post} />
      </RenderOnScroll>
    </div>
  );
};

PostFooter.propTypes = propTypes;

export default PostFooter;