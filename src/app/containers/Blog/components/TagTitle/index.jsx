import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.css';

const propTypes= {
  tag: PropTypes.string.isRequired,
  posts: PropTypes.number.isRequired
};

const TagTitle = ({ tag, posts}) => {

  const numPosts = posts === 1 ? 'post' : 'posts';
  return (
    <div className={ styles.TagTitle } >
      <h1>
        <span>
          { tag.toUpperCase() }
        </span>
        :
        <small>
          { posts } { numPosts }
        </small> 
      </h1>
    </div>
  );
};

TagTitle.propTypes = propTypes;

export default TagTitle;