import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import { SiteConf } from 'base';
import PostImage from 'components/PostImage';
import styles from './styles.css';

const propTypes = {
  related: PropTypes.array.isRequired
};

const RelatedPost = ({ related }) => {
  const randKey = Math.floor(Math.random() * related.length);
  const { slug, feature_image, title } = related[randKey];
  const imageSrc = `${ SiteConf.ImageUrl }${ feature_image }`;
  const url = `/blog/${ slug }`;

  return (
    <div className={ styles.RelatedBoxWrap }>
      <div className={ styles.RelatedBox }>
        <div className={ styles.txt }>TAMBIÉN EN EL BLOG ISOMÓRFICO</div>
        <a href={ url } className={ styles.linkImage } to={ url }>
          <span className={ styles.title }>{ title }</span>
          <PostImage src={ imageSrc } alt={ slug } width="500" />
        </a>
      </div>
    </div>
  );
};

RelatedPost.propTypes = propTypes;

export default RelatedPost;