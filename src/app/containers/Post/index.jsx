import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { fetchRequiredActions, SiteConf } from 'base';
import styles from './styles.css';
import * as Actions from './actions';
import PostHeader from './components/PostHeader';
import PostContent from './components/PostContent';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  Post: PropTypes.instanceOf(Immutable.Record).isRequired
};

export class Post extends Component {

  static requiredActions = [Actions.getPost];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    const force = (this.props.Post.id) ? true : false;
    fetchRequiredActions(Post.requiredActions, this.props, 'PostModel', force);
  }

  componentWillUnmount() {
    this.actions.cleanPost();
  }

  render () {
    const post = this.props.Post;
    const postImage = `${SiteConf.ImageUrl}${post.image}`;

    return (
      <div>
        <PostHeader
          image={ postImage }
          title={ post.title }
        />
        <PostContent
          post={ post }
        />
      </div>
    );
  }

}

Post.propTypes = propTypes;


export default connect(
  (state) => ({ Post: state.Post })
)(Post);
