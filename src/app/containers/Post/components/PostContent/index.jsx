import prism from 'prismjs';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import 'prismjs/components/prism-jsx.min';
import ReactHtmlParser from 'html-react-parser';

import { SiteConf, context } from 'base';
import Loading from 'components/Loading';
import PostInfo from 'components/PostInfo';
import SharePost from '../SharePost';
import PostComments from '../PostComments';

import styles from './styles.css';

class PostContent extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    handler: PropTypes.func
  };

  componentDidMount() {
    this.highlightCode();
  }

  highlightCode() {
    setTimeout(() => prism.highlightAll(), SiteConf.codeHighlightDelay);
  }

  isLoaded() {
    return !~this.props.post.id;
  }

  render() {
    const { post } = this.props;
    const postLoaded = this.isLoaded(post);
    const Content = postLoaded ? <Loading /> : ReactHtmlParser(post.html);

    const cx = classNames.bind(styles);
    const postContentStyle = cx({
      postContent: true,
      fadeIn: context.client
    });

    return (
      <div className={ styles.post }>
        <div className={ postContentStyle }>
          <h1>{ post.title }</h1>
          <PostInfo post={ post } handler={ this.props.handler } />
          <div className={ styles.postText }>
            { Content }
            <span className={ styles.divider } />
            <SharePost post={ post } />
            <PostComments post={ post } />
          </div>
        </div>
      </div>
    );
  }
}

export default PostContent;
