import { Link } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';
import React, { Component } from 'react';
import ReactHtmlParser from 'html-react-parser';

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

  getPost(post) {
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
        <Link className={ styles.linkImage }  to={ url } onClick={ () => this.getPost(post) }>
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
          <Link to={ url } onClick={ () => this.getPost(post) }>
            Continuar leyendo
          </Link> 
        </div>
      </article>
    );
  }
}

export default connect()(PostSummary);