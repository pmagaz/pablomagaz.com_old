import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';

import { ListToArray } from 'base';
import { context } from 'base';
import PostSummary from '../PostSummary';
import styles from './styles.css';

const propTypes = {
  posts: PropTypes.object.isRequired
};

const PostList = ({ posts }) => {
  const cx = classNames.bind(styles);

  const postListStyles = cx({
    postList: true,
    fadeIn: context.client
  });

  const postList = ListToArray(posts);
  const Posts = postList.map(post => <PostSummary post={ post } key={ post.id } />);

  return <div className={ postListStyles }>{ Posts }</div>;
};

PostList.propTypes = propTypes;

export default PostList;
