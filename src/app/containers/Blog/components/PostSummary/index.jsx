import React  from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import ReactHtmlParser from 'html-react-parser';
import { getPostUrl, SiteConf } from 'base';
import PostImage from 'components/PostImage';
import PostInfo from '../PostInfo';
import { cleanPost } from '../../../Post/actions';
import * as styles from './styles.css';
import store from 'redux';

const propTypes= {
  post: PropTypes.object.isRequired
};

const PostSummary = ({ post }) => {
  const url = getPostUrl(post.slug);
  const imageSrc = `${SiteConf.ImageUrl}${post.image}`;

  return (
    <div className={ styles.PostSummary } >
      <Link to={ url }>
        <h1> { post.title } </h1>
      </Link>
      <Link to={ url }>
        <PostImage
          src={ imageSrc }
          alt={ post.slug }
          width="300"
        />
      </Link>
      <div>
        { ReactHtmlParser(post.summary)}
      </div>
      <PostInfo
        author={ post.author }
        tags={ post.tags }
        date={ post.updated_at }
      />
    </div>
  );
};

PostSummary.propTypes = propTypes;

export default PostSummary;
