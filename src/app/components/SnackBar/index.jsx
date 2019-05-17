import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { pure } from 'recompose';
import { SiteConf } from 'base';
import classNames from 'classnames/bind';
import styles from './styles.css';

class SnackBar extends Component {
  static propTypes = {
    buttons: PropTypes.bool,
    exit: PropTypes.bool,
    position: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  render() {
    const cx = classNames.bind(styles);
    const snackBarStyle = cx({
      snackBarTop: this.props.position === 'top',
      snackBarBottom: this.props.position === 'bottom',
      exitDown: this.props.position === 'top' && this.props.exit,
      exitUp: this.props.position === 'bottom' && this.props.exit
    });

    let buttons;

    if (this.props.buttons) {
      buttons = (
        <div className={ styles.content }>
          <button
            className={ styles.buttonKo }
            aria-label="dismiss cookie message"
            role="button"
            tabIndex="0"
            onClick={ () => this.setCookie() }
          >
            No gracias
          </button>
          <button
            className={ styles.buttonOk }
            aria-label="dismiss cookie message"
            role="button"
            tabIndex="1"
            onClick={ () => this.setCookie() }
          >
            Acepto
          </button>
        </div>
      );
    }

    const logoUrl = `${ SiteConf.blogImage }`;
    const snackBar = (
      <div className={ snackBarStyle }>
        <div className={ styles.content }>
          <img className={ styles.snackLogo } src={ logoUrl } />
          <span className={ styles.snackMessage }>{ this.props.children }</span>
        </div>
      </div>
    );

    return <div>{ snackBar }</div>;
  }
}

export default pure(SnackBar);
