import React  from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import { ListToArray, context } from 'base';
import Loading from 'components/Loading';
import PostSummary from '../PostSummary';

import styles from './styles.css';

const isLoaded = (posts) => posts.size ? true : false;

const propTypes= {
  posts: PropTypes.object.isRequired
};

const PostList = ({ posts }) => {

  const cx = classNames.bind(styles);

  const postsLoaded = isLoaded(posts);
  const postList = ListToArray(posts);
  const Posts = postList.map(post => (
    <PostSummary
      post={ post }
      key={ post.id }
    />
  ));

  const postListStyle = cx({
    'postList': context.client,
   });

   console.log(11111, isLoaded(posts));

  const Content = !postsLoaded ? <Loading /> : Posts; 
  
  return (
    <div className={ postListStyle }>
      <CSSTransitionGroup
        key="f1"
        transitionName="fade"
        transitionAppear={ true }
        transitionEnterTimeout={ 90 }
        transitionAppearTimeout={ 90 }
        transitionEnter={ true }
        transitionLeave={ false }>
        { Content }
      </CSSTransitionGroup>
    </div>
  );
};

PostList.propTypes = propTypes;

export default PostList;
