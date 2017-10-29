import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { bindActionCreators } from 'redux';

import { SiteConf } from 'base';
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
    });

    return (
      <div className={ styles.mainWrapper }>
        <section className={ styles.home }>
          <div className={ brandStyle }>
            <h1>{ SiteConf.Author }</h1>
          </div>
        </section>

        <section id="about" className={ styles.about }>
          <article className={ styles.content }>
            <img src="../assets/images/about/me.jpg"/>
            <h1>Sobre mí</h1>
            <p>
            Soy { SiteConf.Author }, Leonés afincado Madrid desde muy temprana edad, llevo trabajando como desarrollador en diferentes tecnologías más de 15 años: Desde Php o Python pasando por Android, Pl/Sql, administración de Unix, etc hasta llegar al lenguaje en el que más me he centrado en los últimos tiempos: JavaScript.
              <br />
              <br />
            Actualmente trabajo en <a href="http://www.atsistemas.com" target="_blank" rel="noopener noreferrer">atSistemas</a> como Tech Lead del área de JavaScript y he desarrollado proyectos backend con NodeJs y Front-End con Polymer, AngularJs, Angular, React, Redux, RxJs etc en fin que no me caso con nada y me gusta todo, aunque logicamente ¡tengo mis preferencias!.
              <br />
              <br />
            Algunas de las iniciativas interesantes que he llevado a cabo durante este tiempo ha sido la publicación de diferentes boilers para desarrollo  como <a href="https://github.com/atSistemas/angularjs-base" target="_blank" rel="noopener noreferrer">AngularJs Base</a>, <a href="https://github.com/atSistemas/angular-base" target="_blank" rel="noopener noreferrer">Angular Base</a> y <a href="https://github.com/atSistemas/react-base" target="_blank" rel="noopener noreferrer">React Base</a>, boiler con el que está realizado este blog y del que puedes ver todo el <a href="https://github.com/pmagaz/pablomagaz.com" target="_blank" rel="noopener noreferrer">código fuente</a> en mi <a href="https://github.com/pmagaz" target="_blank" rel="noopener noreferrer">github</a>.
              <br />
              <br />
            Aparte del desarrollo y supervisión técnica de proyectos he realizado talleres técnicos, formación a equipos de empresas y dado charlas en eventos como:
            </p>
            <ul>
              <li>
                Open Expo 2016: Presentación base.
              </li>
              <li>
                Codemotion 2016: Aplicaciones Isormoficas con React.
              </li>
              <li>
                Codemotion 2017: Programación Reactiva con RxJs.
              </li>
              <li>
               KeepCoding 2018: Proximamente 
              </li>
            </ul>
            <ul className={ styles.photos }>
              <li>
                <img src="../assets/images/about/pablomagaz@codemotion_2017.jpg" alt="Aplicaciones Isomorficas con React @ Codemotion 2017"/>
              </li>
              <li>
                <img src="../assets/images/about/pablomagaz@react-redux-techday.png" alt="React/Redux Techday @ atSistemas 2017"/>
              </li>
              <li>
                <img src="../assets/images/about/codemotion2017.jpg" alt="Codemotion 2017"/>
              </li>
              <li>
                <img src="../assets/images/about/pablomagaz@openexpo_2017.jpg" alt="Open Expo 2017"/>
              </li>
            </ul>
            <h2>Mis otras affciones</h2>
            <p>
              Aparte de la programación me encanta la música electronica. Dispongo de un pequeño estudio y cuando tengo tiempo, que no suele ser muy a menudo, me meto de lleno en el mundo de la producción musical.
            </p>
            <h2>Contacto</h2>
            <p>
              Puedes contactar conmigo en cualquiera de estos canales:
            </p>
            <br />
            <span>
              <Social />
            </span>
          </article>
        </section>
      </div>
    );
  }
}

export default connect(null)(Main);