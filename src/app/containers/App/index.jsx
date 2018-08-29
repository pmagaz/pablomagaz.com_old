import { PropTypes } from 'prop-types'
import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import styles from './styles.css'

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  render() {
    const location = this.props.location
    return (
      <div className={ styles.app  }>
        <div className={ styles.cookieBox  }>
          <span className={ styles.cookieBoxMessage  }>
            Hi! We use cookies, just to track visits to our website, we store no personal details. 
            <a aria-label="learn more about cookies" role="button" tabindex="0" href="https://cookiesandyou.com" target="_blank">More info</a>
          </span>
          <button aria-label="dismiss cookie message" role="button" tabindex="0">Ok, I got it!</button>
        </div>
        <Header location={ location }/>
        <main className={ styles.container  }>
          { this.props.children }
        </main>
        <Footer />
      </div>
    )
  }
}

export default App