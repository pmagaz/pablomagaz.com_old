import React  from 'react';
import { PropTypes } from 'prop-types';
import hljs from 'highlight.js/lib/highlight';
import ReactHtmlParser from 'html-react-parser';
import javascript from 'highlight.js/lib/languages/javascript';

import { fetchRequiredActions, SiteConf } from 'base';
import PostDate from 'components/PostDate';
import * as styles from './styles.css';

const propTypes= {
  post: PropTypes.object.isRequired
};

const PostContent = ({ post }) => {

  setTimeout(function(){
    hljs.initHighlighting.called = false;
    hljs.registerLanguage('javascript', javascript);
    hljs.initHighlighting();
  }, SiteConf.codeHighlightDelay);

  return (
    <div className={ styles.post }>
      <div className={ styles.postContent }>
        <h1>{ post.title }</h1>
        <span className={ styles.author } >
          { post.author }
        </span>
        <PostDate
          date={ post.created_at }
        />
        { ReactHtmlParser(post.html) } 
      </div>
    </div>
  );
};

PostContent.propTypes = propTypes;

export default PostContent;
