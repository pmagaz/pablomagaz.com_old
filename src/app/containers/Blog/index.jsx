import Immutable from 'immutable'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

import { fetchRequiredActions, SiteConf } from 'base'
import BlogHeader from 'components/BlogHeader'
import PostList from './components/PostList'
import TagTitle from './components/TagTitle'
import * as Actions from './actions'
import styles from './styles.css'

class Blog extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    Blog: PropTypes.shape({
      posts: PropTypes.instanceOf(Immutable.List).isRequired,
      pagination: PropTypes.instanceOf(Immutable.Record).isRequired,
    })
  }
  
  static requiredActions = [Actions.getPosts];

  constructor(props) {
    super(props)
    this.actions = bindActionCreators(Actions, props.dispatch)
  }

  componentDidMount() {
    const postsLoaded = (this.props.Blog.posts.size) ? false : true
    fetchRequiredActions(Blog.requiredActions, this.props, postsLoaded)
  }

  componentWillReceiveProps(nextProps) {
    const prevParams = this.props.params
    const nextParams = nextProps.params
    if (prevParams && prevParams.tag !== nextParams.tag) this.actions.getPosts(nextParams)
  }

  componentWillUnmount() {
    if (this.isTagFilter()) this.actions.cleanTagFilter()
  }

  isTagFilter() {
    return ~this.props.location.pathname.indexOf('tag')
  }

  render () {
    let tagTitle
    const posts = this.props.Blog.posts
    if (this.isTagFilter()) {
      tagTitle = <TagTitle tag={ this.props.params.tag } posts={ posts.size } />
    }

    return (
      <div className={ styles.blog } >
        <div className={ styles.content } >
          <BlogHeader
            image={ SiteConf.blogImage }
            title={ SiteConf.BlogTitle }
          />
          <span className={ styles.shape }></span>
          { tagTitle }
          <div className={ styles.blogContent }>
            <PostList posts={ posts } />
            <aside>
              <div className={ styles.sendMail }>
              <h3>Mail list
                  <small></small>
                </h3>
                <div className={ styles.sendMailInput }>
                  <input type="text" placeholder="Escribe tu e-mail"></input>
                  <button>»</button>
                </div>
              </div>
              <div  className={ styles.tagBox }>
                <h3>Tagging
                  <small></small>
                </h3>

                <ul>
                  <li><a><mark>Javascript</mark></a></li>
                  <li><a><mark>pwa</mark></a></li>
                  <li><a><mark>Vue</mark></a></li>
                </ul>  
              </div>
              </aside>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  Blog: state.Blog,
}))(Blog)