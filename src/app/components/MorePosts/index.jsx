import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import styles from './styles.css';

const propTypes = {
  url: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

const MorePosts = ({ url, click }) => (
  <div className={ styles.container }>
    <Link to={ url } onClick={ () => click() }>
      <button className={ styles.morePosts }>Más posts</button>
    </Link>
  </div>
);

MorePosts.propTypes = propTypes;

export default MorePosts;
