import React  from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import ReactHtmlParser from 'html-react-parser';
import { getPostUrl, SiteConf } from 'base';
import PostImage from 'components/PostImage';
import PostInfo from '../PostInfo';
import PostTag from '../PostTag';
import * as styles from './styles.css';

const propTypes= {
  post: PropTypes.object.isRequired
};

const PostSummary = ({ post }) => {
  const url = getPostUrl(post.slug);
  const imageSrc = `${SiteConf.ImageUrl}${post.image}`;

  return (
    <div className={ styles.PostSummary } >
        <PostTag
          tags={ post.tags }
        />
      <Link to={ url }>
        <h1> { post.title } </h1>
      </Link>
      <PostInfo
        author={ post.author }
        date={ post.updated_at }
      />
      <Link className={ styles.linkImage } to={ url }>
        <PostImage
          src={ imageSrc }
          alt={ post.slug }
          width="500"
        />
      </Link>
      <div>
        { ReactHtmlParser(post.summary)}
      </div>

    </div>
  );
};

PostSummary.propTypes = propTypes;

export default PostSummary;
