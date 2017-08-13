import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { bindActionCreators } from 'redux';

import { fetchRequiredActions, SiteConf, context } from 'base';
import * as Actions from './actions';
import PostList from './components/PostList';
import LinkButton from 'components/LinkButton';
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
    const pathName = this.props.location.pathname;
    if(~pathName.indexOf('tag')) this.actions.cleanTagFilter();
  }

  render () {
    const posts = this.props.Blog.posts;
    const cx = classNames.bind(styles);
    const blogTitleStyle = cx({
    'titleBlogAnim': context.client ? true : false
    });

    return (
      <div className= { styles.Blog } >
        <div className= { styles.BlogContent } >
          <header className={ styles.titleBlog }>
            <div className={ styles.blogTitleWrap }>
            <div className={ blogTitleStyle } > 
             <img src="assets/images/LogoBlog.png" height="78" />
              <h1>
                { SiteConf.BlogTitle.toUpperCase() }
              </h1>
              </div>
              <LinkButton
                location="#contact"
                value="//Source Code"
              />  
            </div>
          </header>
          <span className= { styles.band } ></span>
          <PostList posts={ posts } />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  Blog: state.Blog,
}))(Blog);