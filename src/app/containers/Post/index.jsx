import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { SiteConf } from 'base';
import BlogHeader from 'components/BlogHeader';
import PostContent from './components/PostContent';
import * as Actions from './actions';
import styles from './styles.css';

class Post extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    Post: PropTypes.instanceOf(Immutable.Record).isRequired 
  }

  static requiredActions = [Actions.getPost];
  
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentWillUnmount() {
    this.actions.cleanPost();
  }

  render () {
    const post = this.props.Post;
    const image = post.feature_image || post.image;
    const postImage = `${ SiteConf.ImageUrl }${ image }`;

    return (
      <div className={ styles.post } >
        <div className={ styles.content } >
          <BlogHeader
            image={ postImage }
            title={ SiteConf.BlogTitle }
          />
          <span className={ styles.shape }></span>
          <PostContent post={ post } />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  Post: state.Post
}))(Post);