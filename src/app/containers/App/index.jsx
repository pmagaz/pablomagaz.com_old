import { PropTypes } from 'prop-types'
import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import CookieBox from 'components/CookieBox'
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
        <Header location={ location }/>
        <main className={ styles.container  }>
          { this.props.children }
        </main>
        <Footer />
        <CookieBox />
      </div>
    )
  }
}

export default App