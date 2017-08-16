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
  const postTitleStyle = cx({
    'postTitleAnim': context.client ? true : false
  });

  return (



    <header style={ style } className={ styles.postHeader }>
      <div className={ styles.postHeaderWrap }>
          <h1 className={ postTitleStyle }>
            { SiteConf.BlogTitle.toUpperCase() }
          </h1>
      </div>
    </header>
  )
};

PostHeader.propTypes = propTypes;

export default PostHeader;