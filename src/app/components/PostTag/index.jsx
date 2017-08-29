import React, { Component } from 'react';
import { store } from 'redux';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SiteConf } from 'base';
import styles from './styles.css';
import * as BlogActions from 'containers/Blog/actions';

class PostTag extends Component {

static propTypes= {
  dispatch: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
};

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(BlogActions, props.dispatch);
  }

  render() {

  const tagList = this.props.tags.map(tag => {
    return (
      <Link key={ tag.id } to={ '/tag/' + tag.slug}>
        <mark key={ tag.id }> { tag.name } </mark>
    </Link>
    );
  });

  return (
    <div className={ styles.postTag } >
      { tagList }
    </div>
  );
};
}

//PostTag.propTypes = propTypes;

export default connect(null)(PostTag);
