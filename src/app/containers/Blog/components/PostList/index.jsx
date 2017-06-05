import React  from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import ReactHtmlParser from 'html-react-parser';
import InfiniteScroll from 'react-infinite-scroller';

import { getPostUrl, SiteConf } from 'base';
import PostImage from 'components/PostImage';
import PostInfo from '../PostInfo';
import * as Actions from '../../actions';

const propTypes= {
  posts: PropTypes.object.isRequired
};

const getPosts = (page) => {
  Actions.getPosts({page});
}

const PostList = ({ posts }) => {

  const PostList = posts.map( post => {
    const url = getPostUrl(post.slug);
    const imageSrc = `${SiteConf.ImageUrl}${post.image}`;
    return (
      <div key={ post.id }>
        <Link to={ url }>
          <h1> { post.title } </h1>
        </Link>
        <PostImage
          src={ imageSrc }
          alt={ post.slug }
        />
        <div>
          { ReactHtmlParser(post.html) }
        </div>
        <PostInfo
          author={ post.author }
          tags={ post.tags }
          date={ post.updated_at }
        />
      </div>
    );
  });

  const hasmore = false;
  const loader = <div className="loader">Loading ...</div>;

  const loading = (<div className="infinite-list-item">
      Loading...
  </div>);

  return (
    <InfiniteScroll
           pageStart={ 1 }
           loadMore={ getPosts }
           hasMore={ true }
           threshold={ 10 }
           loader={ loader }>
           <div className="tracks">
               { PostList }
           </div>
       </InfiniteScroll>
  );
};

PostList.propTypes = propTypes;

export default PostList;
