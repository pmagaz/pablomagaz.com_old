import React  from 'react';
import { PropTypes } from 'prop-types';
import ReactHtmlParser from 'html-react-parser';

import PostDate from 'components/PostDate';

import * as styles from './styles.css';

const propTypes= {
  post: PropTypes.object.isRequired
};

const PostContent = ({ post }) => {

  return (
    <div className={ styles.postContent }>
      <h2>{ post.title }</h2>
      <PostDate
        date={ post.created_at }
      />
      { ReactHtmlParser(post.html)}
      <b>{ post.author }</b>
    </div>
  );
};

PostContent.propTypes = propTypes;

export default PostContent;
