import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const Post = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

Post.propTypes = propTypes;

export default Post;
