import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { bindActionCreators } from 'redux';

import { fetchRequiredActions, SiteConf, context } from 'base';
import * as Actions from './actions';
import PostList from './components/PostList';
import styles from './styles.css';

class Blog extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
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
  }

  render () {
    const posts = this.props.Blog.posts;
    const cx = classNames.bind(styles);
    const blogTitleStyle = cx({
      'titleBlog': true,
      'titleBlogAnim': context.client ? true : false
    });

    return (
      <div className= { styles.Blog } >
        <div className= { styles.BlogContent } >
          <h1 className={ blogTitleStyle }>
            { SiteConf.BlogTitle.toUpperCase() }
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
  Blog: state.Blog
}))(Blog);