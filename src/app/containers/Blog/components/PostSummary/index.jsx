import React  from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';
import ReactHtmlParser from 'html-react-parser';

import { getPostUrl, SiteConf, context } from 'base';
import PostTag from 'components/PostTag';
import PostImage from 'components/PostImage';
import PostInfo from '../PostInfo';
import styles from './styles.css';

const propTypes= {
  post: PropTypes.object.isRequired
};

const PostSummary = ({ post }) => {
  const url = getPostUrl(post.slug);
  const imageSrc = `${SiteConf.ImageUrl}${post.image || post.feature_image}`;

  const cx = classNames.bind(styles);
  const postSummaryClass = cx({
    'PostSummary': true,
    'PostSummaryAnim': (context === 'client') ? true : false
  });

  return (
    <div className={ postSummaryClass } >
      <PostInfo
        author={ post.author }
        date={ post.updated_at }
      />
      <Link to={ url }>
        <h1> { post.title } </h1>
      </Link>
        <PostTag
          tags={ post.tags }
        />
      <Link className={ styles.linkImage } to={ url }>
        <PostImage
          src={ imageSrc }
          alt={ post.slug }
          width="500"
        />
      </Link>
      <div className={ styles.postText }>
        { ReactHtmlParser(post.opening) }
      </div>

    </div>
  );
};

PostSummary.propTypes = propTypes;

export default PostSummary;