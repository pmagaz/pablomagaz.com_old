import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { pure } from 'recompose';
import classNames from 'classnames/bind';

import { SiteConf } from 'base';
import Menu from 'components/Menu';
import Logo from 'components/Logo';
import styles from './styles.css';

class Header extends Component {
  
  static propTypes= {
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { show: false, scrollTop: 0 }; 
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    const maxScroll = 118;
    const scrollTop = event.srcElement.body.scrollTop;
    if(scrollTop >= maxScroll && !this.state.show) { 
      this.setState({ show: true, scrollTop });
    } 
    else if(scrollTop <= maxScroll && this.state.show) {
      this.setState({ show: false, scrollTop });
    }
  }

  render() {
    const cx = classNames.bind(styles);
     const headerStyle = cx({
       mainHeader: true,
       mainHeaderActive: this.state.show
    });

    return (
      <header className={ headerStyle }>
        <div className={ styles.mainHeaderWrapper }>
        <Logo location= { this.props.location } />
        <Menu />
        </div>
      </header>
    );
  }
};

export default Header;
