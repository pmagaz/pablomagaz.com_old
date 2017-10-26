import React  from 'react';
import classNames from 'classnames/bind';

import { SiteConf, context } from 'base';
import Social from 'components/Social';
import BlogTitle from 'components/BlogTitle';
import styles from './styles.css';

const BlogHeader = () => {
  
  const cx = classNames.bind(styles);
  const blogTitleStyle = cx({
    //'titleBlogAnim': context.client ? true : false
    'titleBlogAnim': true 
  });

  const style = { backgroundImage: `url(${ SiteConf.blogImage })` };

  return (
    <header className={ styles.blogTitle }>
      <div className={ styles.blogTitleWrap }>
        <div style={ style } className={ blogTitleStyle } > 
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

export default BlogHeader;