import ReactDOM from 'react-dom';
import React, { Component }  from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';

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
    const imgTag = ReactDOM.findDOMNode(this.imageRef);
    const img = new window.Image();
    img.onload = this.onImageLoad.bind(this);
    img.src = imgTag.getAttribute('src');
  }

  onImageLoad() {
    this.setState({ loaded: true });
  }

  render() {
    const { src, alt, width } = this.props;
    const cx = classNames.bind(styles);

    const imageClass = cx({
      'image': true,
      'image-loaded': this.state.loaded
    });

    return (
      <div className = { styles.imageWrapper } >
        <img
          src={ src }
          alt={ alt }
          width={ width }
          className={ imageClass }
          ref={ (ref) => { this.imageRef = ref;} }
        />
      </div>
    );
  }

}

PostImage.propTypes = propTypes;

export default PostImage;
