import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchRequiredActions } from 'base';

import Logo from '../../components/Logo';
import styles from './styles.css';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export class Main extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount(){
    const smoothscroll = require('smoothscroll-polyfill').polyfill(); 
    const hash = this.props.location.hash; 
    if(hash) this.scrollToHash(hash);
  }

  scrollToHash(hash){
    const section = document.querySelector(`${hash}`);
    if(section) section.scrollIntoView({ behavior: 'smooth' }); 
  }

  render () {
    return (
      <div className={ styles.mainWrapper }>
        <section className={ styles.home }>
            <div className={ styles.brand }>
              <h1>Pablo Magaz</h1>
            </div>
        </section>

        <section id="about" className={ styles.about }>
          <div className={ styles.content }>
            <h2>About</h2>
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>
          </div>
        </section>

        <section id="contact" className={ styles.contact }>
          <div className={ styles.content }>
            <h2>contact</h2>
            <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>
          </div>
        </section>

      </div>
    );
  }
}

Main.propTypes = propTypes;

export default connect(
  (state) => ({ MainModel: state.Main })
)(Main);
