import React  from 'react';
import { PropTypes } from 'prop-types';

import { ListToArray } from 'base';
import Loading from 'components/Loading';
import PostSummary from '../PostSummary';
import styles from './styles.css';

const isLoaded = (posts) => posts.size ? true : false;

const propTypes= {
  posts: PropTypes.object.isRequired
};

const PostList = ({ posts }) => {

  const postsLoaded = isLoaded(posts);
  const postList = ListToArray(posts);
  const Posts = postList.map(post => (
    <PostSummary
      post={ post }
      key={ post.id }
    />
  ));

  const content = !postsLoaded ? <Loading /> : Posts; 
  
  return (
    <div className={ styles.postList }> { Posts } </div>
  );
};

PostList.propTypes = propTypes;

export default PostList;
