import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
//import {compose, withPropsOnChange} from 'recompose';

import * as Actions from './actions';
import { fetchRequiredActions, SiteConf } from 'base';
import { postsSelector, paginationSelector } from './selectors';
import PostList from './components/PostList';
import * as styles from './styles.css';

class Blog extends Component {

  static requiredActions = [Actions.getPosts];

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    Posts: PropTypes.instanceOf(Immutable.List).isRequired,
    //Pagination: PropTypes.instanceOf(Immutable.Record).isRequired,
  }

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    const force = (this.props.Posts.size) ? false : true;
    fetchRequiredActions(Blog.requiredActions, this.props, 'Posts', force);
  }

  render () {
    const posts = this.props.Posts;
    return (
      <div className= { styles.Blog } >
        <div className= { styles.BlogContent } >
          <h1 className={ styles.titleBlog }>
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
export default connect((state, props) => ({
  Posts: postsSelector(state, props),
}))(Blog);