import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { fetchRequiredActions } from 'base';

import * as Actions from './actions';
import ContactComponent from './components/';
import styles from './styles.css';

/* eslint  react/require-default-props: 0 */

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  ContactModel: PropTypes.instanceOf(Immutable.Record)
};

export class Contact extends Component {

  static requiredActions = [Actions.getContact];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(Contact.requiredActions, this.props, 'ContactModel');
  }

  render () {
    let props = this.props.ContactModel; 

    props.name = 'Contact';

    return (
      <div className={ styles.contact  }>
        <ContactComponent name={ props.name } />
      </div>
    );
  }

}

Contact.propTypes = propTypes;


export default connect(
  (state) => ({ ContactModel: state.Contact })
)(Contact);
