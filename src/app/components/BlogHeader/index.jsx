import React, { Component }  from 'react'
import { PropTypes } from 'prop-types'
import { onlyUpdateForKeys } from 'recompose'

import Social from 'components/Social'
import BlogTitle from 'components/BlogTitle'
import styles from './styles.css'

class BlogHeader extends Component {

  static propTypes= {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render () {
    let style
    style = { backgroundImage: 'url(' + this.props.image + ')' }

    return (
      <header className={ styles.blogHeader }>
        <div className={ styles.blogHeaderWrap }>
          <div style={ style } className={ styles.blogHeaderTitle }> 
            <h1>
              <BlogTitle /> 
            </h1>
          </div>
          <div className={ styles.socialBox }>
            <Social />
          </div>
        </div>
      </header>
    )
  }
}

export default onlyUpdateForKeys(['image'])(BlogHeader)