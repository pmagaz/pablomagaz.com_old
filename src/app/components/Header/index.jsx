import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { pure } from 'recompose';
import classNames from 'classnames/bind';
import Menu from 'components/Menu';
import Logo from 'components/Logo';
import styles from './styles.css';

class Header extends Component {
  
  static propTypes = {
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { collapsed: false, scrollTop: 0 }; 
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const maxScroll = 112;
    // FIX
    const scrollTop = document.scrollingElement.scrollTop || document.documentElement.scrollTop;
    if (scrollTop >= maxScroll && !this.state.collapsed) {
      this.setState({ collapsed: true, scrollTop });
    } 
    else if (scrollTop <= maxScroll && this.state.collapsed) {
      this.setState({ collapsed: false, scrollTop });
    }
  }

  render() {

    const cx = classNames.bind(styles);
    const headerStyle = cx({
      mainHeader: true,
      mainHeaderActive: this.state.collapsed
    });
    return (
      <header className={ headerStyle }>
        <span className={ styles.mainHeaderSheet }></span>
        <div className={ styles.mainHeaderWrapper }>
          <Logo location= { this.props.location } />
          <Menu collapsed={ this.state.collapsed } />
        </div>
      </header>
    );
  }
}

export default pure(Header);
