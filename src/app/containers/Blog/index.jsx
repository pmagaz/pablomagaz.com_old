import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { bindActionCreators } from 'redux';

import * as Actions from './actions';
import { fetchRequiredActions, SiteConf } from 'base';
import PostList from './components/PostList';
import styles from './styles.css';

class Blog extends Component {

  static requiredActions = [Actions.getPosts];

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    Blog: PropTypes.shape({
      posts: PropTypes.instanceOf(Immutable.List).isRequired,
      pagination: PropTypes.instanceOf(Immutable.Record).isRequired,
    })
  }

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    const postsLoaded = (this.props.Blog.posts.size) ? false : true;
    fetchRequiredActions(Blog.requiredActions, this.props, postsLoaded);
  }

  render () {
    const posts = this.props.Blog.posts;
    const cx = classNames.bind(styles);
     const blogTitleClass = cx({
      'titleBlog': true,
      'titleBlogAnim': posts.size 
    });
    
    console.log(444444, posts.size, this.props.Blog.rendered );
    return (
      <div className= { styles.Blog } >
        <div className= { styles.BlogContent } >
          <h1 className={ blogTitleClass }>
          EL BLOG ISOMORFICO
          </h1>
          <div> 
            <PostList posts={ posts } />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  Blog: state.Blog,
}))(Blog);