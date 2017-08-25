import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { bindActionCreators } from 'redux';

import { fetchRequiredActions, SiteConf, context } from 'base';
import * as Actions from './actions';
import BlogTitle from 'components/BlogTitle';
import PostList from './components/PostList';
import TagTitle from './components/TagTitle';
import LinkButton from 'components/LinkButton';
import Social from 'components/Social';
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

  componentWillReceiveProps(nextProps){
    const prevParams = this.props.params;
    const nextParams = nextProps.params;
    const params = { params: nextParams };
    if(prevParams && prevParams.tag !== nextParams.tag ) this.actions.getPosts(nextParams);
  }

  componentWillUnmount(){
    if (this.isTagFilter()) this.actions.cleanTagFilter();
  }

  isTagFilter() {
    return ~this.props.location.pathname.indexOf('tag');
  }

  render () {
    let tagTitle;
    const posts = this.props.Blog.posts;
    const cx = classNames.bind(styles);
    const blogTitleStyle = cx({
    'titleBlogAnim': context.client ? true : false
    });

    if(this.isTagFilter()){
     tagTitle = <TagTitle tag={ this.props.params.tag } posts={ posts.size } />
    }

    return (
      <div className= { styles.blog } >
        <div className= { styles.content } >
          <header className={ styles.blogTitle }>
            <div className={ styles.blogTitleWrap }>
              <div className={ blogTitleStyle } > 
                <h1> 
                  <BlogTitle /> 
                </h1>
              </div>
              <div className={ styles.socialBox }>
                <Social />
              </div>
            </div>
          </header>
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