import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactHtmlParser from 'html-react-parser';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

import { SiteConf } from 'base';
import Loading from 'components/Loading';
import PostDate from 'components/PostDate';
import * as styles from './styles.css';

const propTypes= {
  post: PropTypes.object.isRequired
};

export class PostContent extends Component {

  static proopTypes = {
    post: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);
  }
  
  componentDidMount() {
    const post = this.props.post;
    this.highlightCode();
  }

   highlightCode() {
    setTimeout(function(){
      hljs.initHighlighting.called = false;
      hljs.registerLanguage('javascript', javascript);
      hljs.initHighlighting();
    }, SiteConf.codeHighlightDelay);
  }

  isLoaded(){
    return !~this.props.post.id ? true : false; 
  }

  render () {
  const post = this.props.post;
  const postLoaded = this.isLoaded(post);
  const content = postLoaded ? <Loading /> : ReactHtmlParser(post.html); 

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
        { content }
      </div>
    </div>
    );
  };
}

export default PostContent;