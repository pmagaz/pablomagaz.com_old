import React, { Component } from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

class PostTag extends Component {

static propTypes= {
  tags: PropTypes.array.isRequired,
};

  constructor(props) {
    super(props);
  }

  render() {
    const tagList = this.props.tags.map(tag => {
      return (
        <Link key={ tag.id } to={ '/tag/' + tag.slug }>
        <mark key={ tag.id }> { tag.name } </mark>
      </Link>
    );
  });

  return (
    <div className={ styles.postTag } >
      { tagList }
    </div>
  );
}
}

export default PostTag;
