import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroller';

import Loading from 'components/Loading';
import * as Actions from './actions';
import { fetchRequiredActions, SiteConf } from 'base';

import PostSummary from './components/PostSummary/';
import * as styles from './styles.css';

export class Blog extends Component {

  static requiredActions = [Actions.getPosts];

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    Posts: PropTypes.instanceOf(Immutable.List).isRequired,
    Pagination: PropTypes.instanceOf(Immutable.Record).isRequired,
  }

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  getPosts(page) {
    this.actions.getPosts({ page });
  }

    componentDidMount() {
    const force = (this.props.Posts.size) ? false : true;
    fetchRequiredActions(Blog.requiredActions, this.props, 'Posts', force);
  }


  render () {
    const Posts = this.props.Posts;
    const PageStart = (Posts.size) ? 1 : 0;
    const PostList = Posts.map( post => (
      <PostSummary
        post={ post }
        key={ post.id }
      />
    )
  );
    return (
      <div className= { styles.Blog } >
        <h1 className={ styles.titleBlog }>EL BLOG ISOMORFICO</h1>
        <div> 
          { PostList }
        </div>
      <aside>aside</aside>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    Posts: state.Blog.posts,
    Pagination: state.Blog.pagination,
  })
)(Blog);
