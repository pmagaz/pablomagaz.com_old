import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { bindActionCreators } from 'redux';

import { context } from 'base';
import Social from 'components/Social';
import * as Actions from '../Blog/actions';
import styles from './styles.css';


class Main extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  };

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    const smoothscroll = require('smoothscroll-polyfill').polyfill(); 
    const hash = this.props.location.hash; 
    if (hash) this.scrollToHash(hash);
    this.actions.getPosts();
  }

  scrollToHash(hash) {
    const section = document.querySelector(`${hash}`);
    if (section) section.scrollIntoView({ behavior: 'smooth' }); 
  }

  render() {
    const cx = classNames.bind(styles);
    const brandStyle = cx({
      'brand': true,
      'brandAnim': context.client ? true : false
    });

    return (
      <div className={ styles.mainWrapper }>
        <section className={ styles.home }>
          <div className={ brandStyle }>
            <h1>Pablo Magaz</h1>
          </div>
        </section>

        <section id="about" className={ styles.about }>
          <article className={ styles.content }>
            <img src="../assets/images/about-me.jpg"/>
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>
            <h3>Contact me</h3>
            <Social />
          </article>
        </section>
      </div>
    );
  }
}

export default connect(null)(Main);