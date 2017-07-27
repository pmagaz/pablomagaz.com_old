import React  from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.css';

const propTypes= {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const PostHeader = ({ image, title }) => {

  const style = {
    backgroundImage: 'url(' + image + ')'
  };

  return(
    <div style={style} className={ styles.postHeader}></div>
  )
};

PostHeader.propTypes = propTypes;

export default PostHeader;