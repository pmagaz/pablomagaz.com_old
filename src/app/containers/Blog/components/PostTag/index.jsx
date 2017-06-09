import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  tags: PropTypes.array.isRequired,
};

const PostTag = ({ tags }) => {

  const tagList = tags.map(tag => {
    return (
      <span key={ tag.id }> { tag.name } </span>
    );
  });

  return (
    <div>
      { tagList }
    </div>
  );
};

PostTag.propTypes = propTypes;

export default PostTag;
