import React  from 'react'
import { pure } from 'recompose'
import { PropTypes } from 'prop-types'
import classNames from 'classnames/bind'

import LinkButton from 'components/LinkButton'
import styles from './styles.css'

const propTypes = {
  collapsed: PropTypes.bool
}

const Menu = ({ collapsed }) => {
  const cx = classNames.bind(styles)
  const menuStyle = cx({
    'navMenu': collapsed? false : true,
    'navMenuCollapsed': collapsed ? true: false
  })

  return (
    <nav className={ menuStyle }>
      <ul>
        <li>
          <LinkButton
            location="/"
            value="Home"
          />
        </li>
        <li>
          <LinkButton
            location="/blog"
            value="Blog"
          />
        </li>
        <li>
          <LinkButton
            location="#about"
            value="Sobre mí"
          />
        </li>
      </ul>
    </nav>
  )
}

Menu.propTypes = propTypes

export default pure(Menu)
