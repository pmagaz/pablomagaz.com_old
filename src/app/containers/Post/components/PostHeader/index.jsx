import React  from 'react';
import { PropTypes } from 'prop-types';
import { pure } from 'recompose';
import classNames from 'classnames/bind';

import { SiteConf } from 'base';
import Social from 'components/Social';
import BlogTitle from 'components/BlogTitle';
import styles from './styles.css';

const propTypes= {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const PostHeader = ({ image }) => {
  let style;
  const postImage = `${ SiteConf.ImageUrl }${ image }`;

  if (image) {
    style = { backgroundImage: 'url(' + postImage + ')' };
  }
  else style = null;

  const cx = classNames.bind(styles);
  const postTitleStyle = cx({
    'postTitleAnim': false,//context.client ? true : false
  });

  return (
    <header className={ styles.postHeader }>
      <div style={ style } className={ styles.postHeaderWrap }>
        <div className={ styles.postHeaderTitle }> 
          <h1>
            <BlogTitle /> 
          </h1>
        </div>
        <div className={ styles.socialBox }>
          <Social />
        </div>
      </div>
    </header>
  );
};

PostHeader.propTypes = propTypes;

export default pure(PostHeader);