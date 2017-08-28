import React  from 'react';
import { PropTypes } from 'prop-types';

import PostDate from 'components/PostDate';
import PostTag from 'components/PostTag';
import styles from './styles.css';

const propTypes= {
  author: PropTypes.string,
  tags: PropTypes.array.isRequired,
  date: PropTypes.string
};

const PostInfo = ({ author, date, tags }) => (
  <div className={ styles.postInfo }>
    <PostTag tags={ tags } />
    <span className={ styles.author } >
    { author }
    </span> 
    <PostDate date={ date } />
  </div>
);

PostInfo.propTypes = propTypes;

export default PostInfo;
