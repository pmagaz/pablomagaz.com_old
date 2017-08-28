import React  from 'react';
import { Link } from 'react-router';

import { SiteConf } from 'base';
import styles from './styles.css';

const BlogTitle = ({ image }) => {
  let style;
  if (image) {
    style = { backgroundImage: 'url(' + image + ')' }
  } else {
    style = { backgroundImage: 'url(assets/images/postcover/rectas/pm.svg)' }
  }

 return(
    <Link to="/blog">
      { SiteConf.BlogTitle.toUpperCase() }
    </Link>
 );
};

export default BlogTitle;