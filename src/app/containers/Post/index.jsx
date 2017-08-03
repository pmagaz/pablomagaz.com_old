import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

import { fetchRequiredActions, SiteConf } from 'base';
import Loading from 'components/Loading';
import styles from './styles.css';
import codeStyle from '../../styles/code.css';
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

  isLoaded() {
    return !~this.props.Post.id ? true : false; 
  }

  componentDidMount() {
    const post = this.props.Post; 
    fetchRequiredActions(Post.requiredActions, this.props, 'Post', this.isLoaded());
    this.highlightCode();
  }

  componentWillUnmount() {
    this.actions.cleanPost();
  }

  highlightCode() {
    setTimeout(function(){
      hljs.initHighlighting.called = false;
      hljs.registerLanguage('javascript', javascript);
      hljs.initHighlighting();
    }, SiteConf.codeHighlightDelay);
  }

  render () {
    const post = this.props.Post;
    const postImage = `${ SiteConf.ImageUrl }${ post.image || post.feature_image }`;
    const content = (this.isLoaded()) ? <Loading /> : <PostContent post={ post } />; 
    
    return (
      <div className={ styles.mainContent  }>
        <div className={ styles.post  }>
          <PostHeader
            image={ postImage }
            title={ post.title }
          />
          { content }
        </div>
      </div>
    );
  }
}

Post.propTypes = propTypes;

export default connect(
  (state) => ({ Post: state.Post })
)(Post);
