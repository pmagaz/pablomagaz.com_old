import React, { Component } from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import { store } from 'redux';
import classNames from 'classnames/bind';
import ReactHtmlParser from 'html-react-parser';
import { connect } from 'react-redux';

import { SiteConf } from 'base';
import PostInfo from 'components/PostInfo';
import PostImage from 'components/PostImage';
import * as PostActions from '../../../Post/actions/';
import styles from './styles.css';

class PostSummary extends Component {

  static propTypes= {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
  };

   constructor(props) {
    super(props);
    //this.actions = bindActionCreators(Actions, props.dispatch);
  }

 leches(post) {
  this.props.dispatch(PostActions.getPost(post));
  }

render() {
  const post = this.props.post;
  const url = '/blog/' + post.slug;
  const imageSrc = `${ SiteConf.ImageUrl }${ post.image || post.feature_image }`;

  const cx = classNames.bind(styles);
  const postSummaryStyle = cx({
    'PostSummary': true,
  });

  return (
    <article className={ postSummaryStyle } >
      <Link className={ styles.linkImage } onClick={ () => this.leches(post) } to={ url }>
        <h1>
          { post.title }
        </h1>
        <PostImage
          src={ imageSrc }
          alt={ post.slug }
          width="500"
        />
      </Link>
      <PostInfo
        tags={ post.tags }
        author={ post.author }
        date={ post.published_at }
      />
      <div className={ styles.postText }>
        { ReactHtmlParser(post.opening) }
      </div>
      <div className={ styles.readMore } >
        <Link to={ url }>
          Continuar leyendo
        </Link> 
      </div>
    </article>
  );
}
};

export default connect()(PostSummary);