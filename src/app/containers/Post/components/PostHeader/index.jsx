import React  from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';

import { SiteConf, context } from 'base';
import styles from './styles.css';

const propTypes= {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const PostHeader = ({ image, title }) => {
  let style;
  const postImage = `${ SiteConf.ImageUrl }${ image }`;

  if (image) {
    style = { backgroundImage: 'url(' + postImage + ')' }
  }
  else style = null;

  const cx = classNames.bind(styles);
  const postHeaderStyle = cx({
    'postHeader': true,
    //'postHeaderAnim': context.client ? true : false
  });

  return (
    <div style={ style } className={ postHeaderStyle }></div>
  )
};

PostHeader.propTypes = propTypes;

export default PostHeader;