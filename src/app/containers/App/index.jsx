import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SnackBars from 'components/SnackBars';
import styles from './styles.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  render() {
    const { location } = this.props;
    return (
      <div className={ styles.app }>
        <Header location={ location } />
        <main className={ styles.container }>{ this.props.children }</main>
        <Footer />
        <SnackBars />
      </div>
    );
  }
}

export default App;
