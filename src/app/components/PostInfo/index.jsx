/* eslint-disable indent */
import React  from 'react'
import { PropTypes } from 'prop-types'
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon} from 'react-share'
import { formatDate, SiteConf } from 'base'

import PostDate from 'components/PostDate'
import PostTag from 'components/PostTag'
import styles from './styles.css'

const propTypes= {
  post: PropTypes.object
}

const PostInfo = ({ post }) => {

  let share 
  if (post.html) {
    const postUrl = `${ SiteConf.BlogUrl }/${ post.slug }`
    const shareTitle = `${ post.title } @ ${ SiteConf.BlogTitle }` 
    
    share = (
      <div className={ styles.socialBoxWrapLinks }>
      <TwitterShareButton title={ post.title } via={ SiteConf.BlogTitle } description={ post.meta_description } url={ postUrl } > 
        <TwitterIcon iconBgStyle={{fill: true, color: '#333333'} } round={ true } size={ 24 } />
      </TwitterShareButton>
      <WhatsappShareButton title={ shareTitle } url={ postUrl } > 
        <WhatsappIcon round={ true } size={ 24 } />
      </WhatsappShareButton>
      <LinkedinShareButton title={ shareTitle } description={ post.meta_description } url={ postUrl } > 
        <LinkedinIcon round={ true } size={ 24 } />
      </LinkedinShareButton>
      <FacebookShareButton url={ postUrl } quote={ shareTitle } >
      <FacebookIcon round={ true } size={ 24 }/>
      </FacebookShareButton>
      </div>
    )
  }
  
  return ( 
    <div>
    <div className={ styles.postInfo }>
      <span className={ styles.author } >
        { post.author }
      </span> 
      <PostDate date={ formatDate(post.published_at) } />
      <PostTag tags={ post.tags } />
      </div>
       { share }
    </div>)
}

PostInfo.propTypes = propTypes

export default PostInfo
