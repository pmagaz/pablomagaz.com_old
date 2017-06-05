import React  from 'react';
import { PropTypes } from 'prop-types';
import { getDate } from 'base';

const propTypes= {
  date: PropTypes.string.isRequired
};

const PostDate = ({ date }) => (
  <span>
    { getDate(date) }
  </span>
);

PostDate.propTypes = propTypes;

export default PostDate;
