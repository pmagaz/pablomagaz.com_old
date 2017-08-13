import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

import styles from './styles.css';
import LinkButton from 'components/LinkButton';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Logo from 'components/Logo';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const location = this.props.location;
    return (
      <div className={ styles.app  }>
        <Header location={ location }/>
        <main className={ styles.container  }>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );

  }
}

export default connect(null)(App);