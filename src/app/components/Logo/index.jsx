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
    this.state = { show: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  isPost() {
    return this.props.location.pathname.length >= 6;
  }

  handleScroll(event) {
    const scrollTop = event.srcElement.body.scrollTop;
    
    if(scrollTop >= 118 && !this.state.show && !this.isPost()) {
      this.setState({ show: true });
    } 
    
    if(scrollTop <= 118 && this.state.show && !this.isPost()) {
      this.setState({ show: false });
    } 
  }

  render() {
    let value;
    const pathName = this.props.location.pathname;
    const hash = this.props.location.hash;
    const isHome = (pathName === '/') ? true : false; 
    if (isHome) value = '';
    else value = SiteConf.BlogTitle.toUpperCase(); 

    const cx = classNames.bind(styles);
     const miniTitleStyle = cx({
      'miniTitle': !this.state.show && !this.isPost() ? true : false,
      'miniTitleActive': this.state.show || this.isPost() || !isHome ? true : false 
    });

    return (
      <span className={ miniTitleStyle }>
        <LinkButton
          id="Logo"
          location="/blog"
          value={ value }  
        />
      </span>
    );
  }
};

export default pure(Logo);