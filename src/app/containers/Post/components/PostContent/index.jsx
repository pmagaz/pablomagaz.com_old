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
    <div className={ styles.post }>
      <div className={ styles.postContent }>
        <h1>{ post.title }</h1>
        <span className={ styles.author } >
          { post.author }
        </span>
        <PostDate
          date={ post.created_at }
        />
        { ReactHtmlParser(post.html) } 
      </div>
    </div>
  );
};

PostContent.propTypes = propTypes;

export default PostContent;
