import React  from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';
import ReactHtmlParser from 'html-react-parser';

import { SiteConf, context } from 'base';
import PostTag from 'components/PostTag';
import PostInfo from 'components/PostInfo';
import PostImage from 'components/PostImage';
import styles from './styles.css';

const propTypes= {
  post: PropTypes.object.isRequired
};

const PostSummary = ({ post }) => {
  const url = '/blog/' + post.slug;
  const imageSrc = `${ SiteConf.ImageUrl }${ post.image || post.feature_image }`;

  const cx = classNames.bind(styles);
  const postSummaryStyle = cx({
    'PostSummary': true,
    'PostSummaryAnim': context.client ? true : false
  });

  return (
    <div className={ postSummaryStyle } >
      <Link to={ url }>
        <h1> { post.title } </h1>
      </Link>
      <Link className={ styles.linkImage } to={ url }>
        <PostImage
          src={ imageSrc }
          alt={ post.slug }
          width="500"
        />
      </Link>
      <PostInfo
          tags={ post.tags }
          author={ post.author }
          date={ post.published_at }
      />
      <div className={ styles.postText }>
        { ReactHtmlParser(post.opening) }
      </div>

    </div>
  );
};

PostSummary.propTypes = propTypes;

export default PostSummary;