import React  from 'react';
import { PropTypes } from 'prop-types';

import PostDate from 'components/PostDate';

const propTypes= {
  tags: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired
};

const PostInfo = ({ tags, date }) => {

  const tagList = tags.map(tag => {
    return (
      <span key={ tag.id }> { tag.name } </span>
    );
  });

  return (
    <div>
      Tags: { tagList } |
      <PostDate date={ date } />
    </div>
  );
};

PostInfo.propTypes = propTypes;

export default PostInfo;
