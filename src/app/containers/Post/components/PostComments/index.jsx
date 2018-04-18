import React  from 'react'
import { PropTypes } from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'
import RenderOnScroll from 'components/RenderOnScroll'
import { SiteConf } from 'base'

const propTypes= {
  post: PropTypes.object.isRequired
}

const newCommentHandler = () => {
  console.log('new comment')
}

const PostComments = ({ post }) => {

  const postUrl = `${ SiteConf.BlogUrl}/${post.slug }`
  const shortName = SiteConf.DisqusSettings.shortName
  const identifier = `${ SiteConf.DisqusSettings.identifier }@${ post.slug }`

  return (
    <RenderOnScroll scroll={ 2000 } >
      <ReactDisqusComments
        url={ postUrl }
        title={ post.title }
        shortname={ shortName }
        identifier={ identifier }
        onNewComment={ newCommentHandler }
      />
    </RenderOnScroll>
  )
}

PostComments.propTypes = propTypes

export default PostComments