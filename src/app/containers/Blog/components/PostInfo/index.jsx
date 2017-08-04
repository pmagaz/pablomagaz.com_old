import React  from 'react';
import { PropTypes } from 'prop-types';
import * as styles from './styles.css';
import PostDate from 'components/PostDate';

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
