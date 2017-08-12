import ReactDOM from 'react-dom';
import React, { Component }  from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Lazyload from 'react-lazyload';

import { context } from 'base';
import styles from './styles.css';

const propTypes= {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export class PostImage extends Component {

  constructor(props) {
    super(props);
    this.imageRef;
    this.state = {loaded: false};
  }

  componentDidMount() {
    /*
    const imgTag = ReactDOM.findDOMNode(this.imageRef);
    const img = new window.Image();
    img.onload = this.onImageLoad.bind(this);
    img.src = imgTag.getAttribute('src');
    */
  }

  onImageLoad() {
    this.setState({ loaded: true });
  }

  render() {
    const { src, alt, width } = this.props;
    const cx = classNames.bind(styles);

    const imageStyle = cx({
      'image': true,
      //'fade-appear': 
      //'imageAnim': this.state.loaded && context.client ? true : false 
    });

    return (
      <div className = { styles.imageWrapper } >
        <Lazyload throttle={200} height={120} offset={400}>
          <CSSTransitionGroup
            key="1"
            transitionName="fade"
            transitionAppear={ true }
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <img className={ imageStyle } src={ src } alt={ alt } width={ width } />
            </CSSTransitionGroup>
          </Lazyload>
      </div>
    );
  }
}

PostImage.propTypes = propTypes;

export default PostImage;
