import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { SiteConf } from 'base';
import BlogHeader from 'components/BlogHeader';
import * as BlogActions from 'containers/Blog/actions';
import PostContent from './components/PostContent';
import * as Actions from './actions';
import styles from './styles.css';

class Post extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    Post: PropTypes.instanceOf(Immutable.Record).isRequired
  };

  static requiredActions = [Actions.getPost];

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
    this.blogActions = bindActionCreators(BlogActions, props.dispatch);
  }

  cleanPosts = () => {
    this.blogActions.cleanPosts();
  };

  render() {
    const post = this.props.Post;
    const image = post.feature_image || post.image;
    const postImage = `${ SiteConf.ImageUrl }${ image }`;

    return (
      <div className={ styles.post }>
        <div className={ styles.content }>
          <BlogHeader image={ postImage } title={ SiteConf.BlogTitle } />
          <span className={ styles.shape } />
          <PostContent post={ post } handler={ this.cleanPosts } />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  Post: state.Post
}))(Post);
