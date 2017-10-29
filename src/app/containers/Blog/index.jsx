import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { fetchRequiredActions, SiteConf } from 'base';
import BlogHeader from 'components/BlogHeader';
import PostList from './components/PostList';
import TagTitle from './components/TagTitle';
import * as Actions from './actions';
import postApi from '../Post/api/';
import styles from './styles.css';

class Blog extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    Blog: PropTypes.shape({
      posts: PropTypes.instanceOf(Immutable.List).isRequired,
      pagination: PropTypes.instanceOf(Immutable.Record).isRequired,
    })
  }
  
  static requiredActions = [Actions.getPosts];

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    const postsLoaded = (this.props.Blog.posts.size) ? false : true;
    fetchRequiredActions(Blog.requiredActions, this.props, postsLoaded);
    postApi.warmPosts(this.props.Blog.posts);
  }

  shouldComponentUpdate(props) {
    postApi.warmPosts(props.Blog.posts);
    return true;
  }

  componentWillReceiveProps(nextProps) {
    const prevParams = this.props.params;
    const nextParams = nextProps.params;
    if (prevParams && prevParams.tag !== nextParams.tag) this.actions.getPosts(nextParams);
  }

  componentWillUnmount() {
    if (this.isTagFilter()) this.actions.cleanTagFilter();
  }

  isTagFilter() {
    return ~this.props.location.pathname.indexOf('tag');
  }

  render () {
    let tagTitle;
    const posts = this.props.Blog.posts;
    if (this.isTagFilter()) {
      tagTitle = <TagTitle tag={ this.props.params.tag } posts={ posts.size } />;
    }

    return (
      <div className={ styles.blog } >
        <div className={ styles.content } >
          <BlogHeader
            image={ SiteConf.blogImage }
            title={ SiteConf.BlogTitle }
          />
          <span className={ styles.shape }></span>
          { tagTitle }
          <PostList posts={ posts } />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  Blog: state.Blog,
}))(Blog);