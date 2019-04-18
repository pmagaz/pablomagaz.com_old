import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderOnScroll extends Component {
  
  static propTypes = {
    scroll: PropTypes.number,
    children: PropTypes.node,
  };

  state = { scrolled: false }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const maxScroll = this.props.scroll;
    const scrollTop = document.scrollingElement.scrollTop || document.documentElement.scrollTop;
    if (!this.state.scrolled && scrollTop >= maxScroll) {
      this.setState({ scrolled: true });
    } 
  }

  render() {
    if (this.state.scrolled) return this.props.children;
    return null;
  }
}

export default RenderOnScroll;