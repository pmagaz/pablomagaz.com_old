import React  from 'react';
import { PropTypes } from 'prop-types';

import PostDate from 'components/PostDate';

const propTypes= {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

const PostInfo = ({ author, date}) => (
  <div>
    { author }
    <PostDate date={ date } />
  </div>
);

PostInfo.propTypes = propTypes;

export default PostInfo;
