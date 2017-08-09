import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { fetchRequiredActions, context } from 'base';
import * as Actions from './actions';
import PostHeader from './components/PostHeader';
import PostContent from './components/PostContent';
import styles from './styles.css';

class Post extends Component {

  static proopTypes = {
    dispatch: PropTypes.func.isRequired,
    Post: PropTypes.instanceOf(Immutable.Record).isRequired 
  }

  static requiredActions = [Actions.getPost];
  
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    const post = this.props.Post;
    const posLoaded = !~post.id ? true : false;  
    fetchRequiredActions(Post.requiredActions, this.props, posLoaded);
  }

  componentWillUnmount() {
    this.actions.cleanPost();
  }

  render () {
    const post = this.props.Post;
    //REMOVE ME
    const image = post.image || post.feature_image;

    return (
      <div className={ styles.mainContent  }>
        <div className={ styles.post  }>
          <PostHeader
            image={ image }
            title={ post.title }
          />
          <PostContent post={ post } />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  Post: state.Post
}))(Post);