import React from 'react';
import { PropTypes } from 'prop-types';
import Lazyload from 'react-lazyload';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './styles.css';

const propTypes= {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

const PostImage = ({ src, alt, width }) => (
  <div className = { styles.imageWrapper } >
    <img className={ styles.image } src={ src } alt={ alt } width={ width } />
  </div>
);

PostImage.propTypes = propTypes;

export default PostImage;
