import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

export class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="app">
        <main>
          {this.props.children}
        </main>
      </div>
    );

  }
}

export default connect(null)(App);
