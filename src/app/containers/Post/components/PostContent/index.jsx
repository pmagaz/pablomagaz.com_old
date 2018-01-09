import { PropTypes } from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames/bind'
import hljs from 'highlight.js/lib/highlight'
import ReactHtmlParser from 'html-react-parser'
import javascript from 'highlight.js/lib/languages/javascript'

import { SiteConf } from 'base'
import Loading from 'components/Loading'
import PostInfo from 'components/PostInfo'
import SharePost from '../SharePost'
import PostComments from '../PostComments'

import styles from './styles.css'

class PostContent extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
  }
  
  componentDidMount() {
    this.highlightCode()
  }

  highlightCode() {
    setTimeout(() => {
      hljs.initHighlighting.called = false
      hljs.registerLanguage('javascript', javascript)
      hljs.initHighlighting()
    }, SiteConf.codeHighlightDelay)
  }

  isLoaded() {
    return !~this.props.post.id ? true : false 
  }

  render () {
    const post = this.props.post
    const postLoaded = this.isLoaded(post)
    const Content = postLoaded ? <Loading /> : ReactHtmlParser(post.html) 

    const cx = classNames.bind(styles)
    const postContentStyle = cx({
      'postContent': true,
    })

    return (
      <div className={ styles.post }>
        <div className={ postContentStyle }>
          <h1>{ post.title }</h1>
          <PostInfo
            author={ post.author }
            tags={ post.tags }
            date={ post.published_at }
          />
          <div className={ styles.postText }>
            { Content }
            <span className={ styles.divider }></span>
            <SharePost post={ post } />
            <PostComments post={ post } />
          </div>
        </div>
      </div>
    )
  }
}

export default PostContent