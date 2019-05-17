import React, { Component } from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

class PostTag extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
    handler: PropTypes.func
  };

  render() {
    const tagList = this.props.tags.map(tag => {
      return (
        <div key={ tag.id } onClick={ () => this.props.handler() }>
          <Link to={ `/tag/${ tag.slug }` }>
            <mark key={ tag.id }> { tag.name } </mark>
          </Link>
        </div>
      );
    });

    return <div className={ styles.postTag }>{ tagList }</div>;
  }
}

export default PostTag;
