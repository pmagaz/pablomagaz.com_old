import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.css';
import LinkButton from 'components/LinkButton';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Logo from 'components/Logo';

export class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className={ styles.app  }>
        <header className={ styles.mainHeader  }>
            <Logo />
            <Menu />
        </header>
        <main className={ styles.container  }>
            {this.props.children}
        </main>
        <Footer />
      </div>
    );

  }
}

export default App;