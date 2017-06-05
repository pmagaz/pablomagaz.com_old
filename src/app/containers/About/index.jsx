import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { fetchRequiredActions } from 'base';

import * as Actions from './actions';
import AboutComponent from './components/';
import styles from './styles.css';

/* eslint  react/require-default-props: 0 */

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  AboutModel: PropTypes.instanceOf(Immutable.Record)
};

export class About extends Component {

  static requiredActions = [Actions.getAbout];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(About.requiredActions, this.props, 'AboutModel');
  }

  render () {
    let props = this.props.AboutModel; 

    props.name = 'About';

    return (
      <div className={ styles.About  }>
        <AboutComponent name={ props.name } />
      </div>
    );
  }

}

About.propTypes = propTypes;


export default connect(
  (state) => ({ AboutModel: state.About })
)(About);
