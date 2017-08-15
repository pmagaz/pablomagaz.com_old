import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { pure } from 'recompose';
import classNames from 'classnames/bind';

import { SiteConf } from 'base';
import LinkButton from 'components/LinkButton';
import styles from './styles.css';

class Logo extends Component {
  
  static propTypes= {
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { show: false, scrollTop: 0, reset: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  isPost() {
    const location = this.props.location;
    return (!!~location.pathname.indexOf('tag') || location.pathname.length < 6) ? false : true;
  }

  isHome() {
    return (this.props.location.pathname === '/') ? true : false; 
  }

  handleScroll(event) {
    const maxScroll = 120;
    const scrollTop = event.srcElement.body.scrollTop;
    if(scrollTop >= maxScroll && !this.state.show && !this.isHome()) {
      this.setState({ show: true, scrollTop });
    } 
    else if(scrollTop <= maxScroll && this.state.show && !this.isHome()) {
      this.setState({ show: false, scrollTop });
    }
  }

  render() {
    let value;
    const pathName = this.props.location.pathname;
    const hash = this.props.location.hash;
    const isHome = (pathName === '/') ? true : false; 
    console.log(111, this.isHome())
    if (this.isHome()) value = '';
    else value = SiteConf.BlogTitle.toUpperCase(); 
    
    const cx = classNames.bind(styles);
     const miniTitleStyle = cx({
      'miniTitle': !this.state.show ? true : false,
      'miniTitleActive': (this.state.show ) ? true : false 
    });

    return (
      <h1 className={ miniTitleStyle }>
        <LinkButton
         id="Logo"
          location="/blog"
          value={ value }  
        />
      </h1>
    );
  }
};

export default Logo;