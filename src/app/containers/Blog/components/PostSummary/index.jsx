import { Link } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';
import React, { Component } from 'react';
import ReactHtmlParser from 'html-react-parser';
import { bindActionCreators } from 'redux';
import { SiteConf } from 'base';
import PostInfo from 'components/PostInfo';
import PostImage from 'components/PostImage';
import * as PostActions from '../../../Post/actions';
import * as Actions from '../../actions';
import styles from './styles.css';

class PostSummary extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
    this.clearPosts = this.clearPosts.bind(this);
  }

  getPost(post) {
    this.props.dispatch(PostActions.getPost(post));
  }

  clearPosts(post) {
    console.log(1111111, this.props);
    this.actions.cleanPosts();
  }

  render() {
    const { post } = this.props;
    const url = `/blog/${ post.slug }`;
    const imageSrc = `${ SiteConf.ImageUrl }${ post.image || post.feature_image }`;

    const cx = classNames.bind(styles);
    const postSummaryStyle = cx({
      PostSummary: true
    });

    return (
      <article className={ postSummaryStyle }>
        <Link className={ styles.linkImage } to={ url } onClick={ () => this.getPost(post) }>
          <h1>{ post.title }</h1>
          <PostImage src={ imageSrc } alt={ post.slug } width="500" />
        </Link>
        <PostInfo post={ post } handler={ this.actions.cleanPosts } />
        <div className={ styles.postText }>{ ReactHtmlParser(post.opening) }</div>
        <div className={ styles.readMore }>
          <Link to={ url } onClick={ () => this.getPost(post) }>
            Continuar leyendo
          </Link>
        </div>
      </article>
    );
  }
}

export default connect()(PostSummary);
