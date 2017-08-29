import React  from 'react';
import { Link } from 'react-router';

import { SiteConf } from 'base';
import styles from './styles.css';

const BlogTitle = () => {
 return(
    <Link to="/blog">
      { SiteConf.BlogTitle.toUpperCase() }
    </Link>
 );
};

export default BlogTitle;