import React  from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import { pure } from 'recompose';
import classNames from 'classnames/bind';

import { SiteConf, context } from 'base';
import BlogTitle from 'components/BlogTitle';
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
  const postTitleStyle = cx({
    'postTitleAnim': false,//context.client ? true : false
  });

  return (
    <header className={ styles.postHeader }>
      <div style={ style } className={ styles.postHeaderWrap }>
          <h1 className={ postTitleStyle }>
             <BlogTitle /> 
          </h1>
      </div>
    </header>
  )
};

PostHeader.propTypes = propTypes;

export default pure(PostHeader);