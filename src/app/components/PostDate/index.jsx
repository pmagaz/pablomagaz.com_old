import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  date: PropTypes.string.isRequired
};

const PostDate = ({ date }) => (
  <span>
    { date }
  </span>
);

PostDate.propTypes = propTypes;

export default PostDate;
