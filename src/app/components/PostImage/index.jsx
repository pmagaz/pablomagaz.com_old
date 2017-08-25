import React from 'react';
import { PropTypes } from 'prop-types';
import Lazyload from 'react-lazyload';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import { context } from 'base';
import styles from './styles.css';

const propTypes= {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

const PostImage = ({ src, alt, width }) => (
  <div className = { styles.imageWrapper } >
    <Lazyload throttle={200} height={120} offset={400}>
      <CSSTransitionGroup
        key="1"
        transitionName="fade"
        transitionAppear={ true }
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <img className={ styles.image } src={ src } alt={ alt } width={ width } />
        </CSSTransitionGroup>
      </Lazyload>
  </div>
);

PostImage.propTypes = propTypes;

export default PostImage;
