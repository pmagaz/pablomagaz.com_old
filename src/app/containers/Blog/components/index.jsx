import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const Blog = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

Blog.propTypes = propTypes;

export default Blog;
