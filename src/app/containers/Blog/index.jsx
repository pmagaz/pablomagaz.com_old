import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import MorePosts from 'components/MorePosts';
import Loading from 'components/Loading';

import { fetchRequiredActions, SiteConf } from 'base';
import BlogHeader from 'components/BlogHeader';
import * as PostActions from 'containers/Post/actions';
import PostList from './components/PostList';
import TagTitle from './components/TagTitle';
import * as Actions from './actions';

import styles from './styles.css';

class Blog extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    Blog: PropTypes.shape({
      posts: PropTypes.instanceOf(Immutable.List).isRequired,
      pagination: PropTypes.instanceOf(Immutable.Record).isRequired
    })
  };

  static requiredActions = [Actions.getPosts];

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
    this.postActions = bindActionCreators(PostActions, props.dispatch);
  }

  componentDidMount() {
    const postsLoaded = !this.props.Blog.posts.size;
    fetchRequiredActions(Blog.requiredActions, this.props, postsLoaded);
  }

  componentWillMount() {
    const { params } = this.props;
    if (this.isTagFilter()) {
      this.actions.getPosts(params);
    } else {
      Promise.all([this.actions.getPosts(params), this.postActions.cleanPost()]);
    }
  }

  componentWillReceiveProps(nextProps) {
    const prevParams = this.props.params;
    const nextParams = nextProps.params;
    if (prevParams.page !== nextParams.page || (prevParams && prevParams.tag !== nextParams.tag)) {
      this.actions.getPosts(nextParams);
    }
  }

  isTagFilter() {
    return this.props.location.pathname.includes('tag');
  }

  loadMorePosts = () => {
    this.actions.cleanPosts();
  };

  render() {
    let content;
    let tagTitle;
    let MorePostsButton;
    const { posts, pagination } = this.props.Blog;
    const url = `/blog/page/${ pagination.page + 1 }`;

    if (this.isTagFilter()) {
      tagTitle = <TagTitle tag={ this.props.params.tag } posts={ posts.size } />;
    }

    if (!this.isTagFilter() && pagination.hasMorePosts) {
      MorePostsButton = <MorePosts url={ url } click={ this.loadMorePosts } />;
    }

    if (posts.size > 0) {
      content = (
        <div>
          { tagTitle }
          <PostList posts={ posts } />
          { MorePostsButton }
        </div>
      );
    } else content = <Loading />;

    return (
      <div className={ styles.blog }>
        <div className={ styles.content }>
          <BlogHeader image={ SiteConf.blogImage } title={ SiteConf.BlogTitle } />
          <span className={ styles.shape } />

          { content }
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  Blog: state.Blog
}))(Blog);
