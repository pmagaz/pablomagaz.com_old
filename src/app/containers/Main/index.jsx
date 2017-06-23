import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchRequiredActions } from 'base';

import Actions from './actions';
import Logo from '../../components/Logo';
import LinkButton from '../../components/LinkButton';
import styles from './styles.css';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  MainModel: PropTypes.instanceOf(Immutable.Record).isRequired
};

export class Main extends Component {

  static requiredActions = [Actions.getLogo];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  render () {
    const LogoData = this.props.MainModel;

    return (
      <div id="wrapper">
        <header id="header">
        <div className={ styles.nameArea }>
          <h1>Pablo Magaz</h1>
          <div>
            <div className={ styles.txt }>Examples</div>

            <div className={ styles.buttons }>
              <LinkButton
                location="/blog"
                value="Blog"
              />
            </div>
          </div>

          <div className={ styles.txt }>
            <div>
              <a href="https://github.com/atSistemas/react-base">
                <img src="assets/images/github.svg" alt="Github" width="40px" />
              </a>
            </div>
          </div>
        </div>
        </header>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default connect(
  (state) => ({ MainModel: state.Main })
)(Main);
