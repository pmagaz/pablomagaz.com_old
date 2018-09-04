import React, { Component  }  from 'react'
import { pure } from 'recompose'
import classNames from 'classnames/bind'

import { setCookie, getCookie } from 'base'
import styles from './styles.css'

class CookieBox extends Component {

  constructor(props) {
    super(props)
    this.state = { showCookieBox : false, faded: false }
    this.setCookie.bind(this)
    this.cookieName = 'ElBlogIsomorficoAceptedCookies'
  }

  componentDidMount() {
    if (!getCookie(this.cookieName)) this.setState({ showCookieBox: true })
  }

  setCookie() {
    setCookie(this.cookieName, 1 , 1000)
    this.setState({ faded: true })
  }

  render() {
    const cx = classNames.bind(styles)
    const cookieBoxStyle = cx({
      cookieBox: true,
      BoxAnim: this.state.faded 
    })

    const cookieBox = (
      <div className={ cookieBoxStyle  }>
        <span className={ styles.cookieBoxMessage  }>
          Este sitio usa cookies para analíticas y minado de criptomonedas. Es coña, solo para analíticas. 
          <a aria-label="learn more about cookies" role="button" tabIndex="0" href="https://cookiesandyou.com" target="_blank" rel="noopener noreferrer">Más info</a>
        </span>
        <button aria-label="dismiss cookie message" role="button" tabIndex="0" onClick={ () => this.setCookie() }>Entendido</button>
      </div>
    ) 

    const showCookieBox = this.state.showCookieBox ? cookieBox : null

    return (
      <div>
        { showCookieBox }
      </div>
    )
  }
}

export default pure(CookieBox)