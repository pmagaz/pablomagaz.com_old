import React  from 'react';
import { PropTypes } from 'prop-types';

import PostDate from 'components/PostDate';
import styles from './styles.css';

const propTypes= {
  author: PropTypes.string,
  date: PropTypes.string.isRequired
};

const PostInfo = ({ author, date}) => (
  <div className={ styles.infoWrited }>
    <span>{ author }</span>
    <PostDate date={ date } />
  </div>
);

PostInfo.propTypes = propTypes;

export default PostInfo;
