import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';

import { SiteConf } from 'base';
import LinkButton from 'components/LinkButton';
import styles from './styles.css';

class Logo extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    show: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = { show: false, scrollTop: 0, reset: false };
  }

  componentWillReceiveProps(props) {
    const scrollTop = document.scrollingElement.scrollTop || document.documentElement.scrollTop;
    this.setState({ show: props.show, scrollTop });
  }

  isPost() {
    const { location } = this.props;
    return !(!!~location.pathname.indexOf('tag') || location.pathname.length < 6);
  }

  isHome() {
    return this.props.location.pathname === '/';
  }

  render() {
    let value;
    if (this.isHome()) value = '';
    else value = SiteConf.BlogTitle.toUpperCase();

    const cx = classNames.bind(styles);
    const miniTitleStyle = cx({
      miniTitle: !this.state.show ? true : true,
      miniTitleActive: !!this.state.show
    });

    return (
      <h1 className={ miniTitleStyle }>
        <LinkButton id="Logo" location="/blog" value={ value } />
      </h1>
    );
  }
}

export default Logo;
