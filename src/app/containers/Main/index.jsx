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
    location: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    const { hash } = this.props.location;
    if (hash) this.scrollToHash(hash);
    this.actions.getPosts();
  }

  scrollToHash(hash) {
    const section = document.querySelector(`${hash}`);
    if (section) setTimeout(() => (section.scrollIntoView({ behavior: 'smooth' }), 500));
  }

  render() {
    const cx = classNames.bind(styles);
    const brandStyle = cx({
      brand: true
    });

    return (
      <div className={styles.mainWrapper}>
        <section className={styles.home}>
          <div className={brandStyle}>
            <h1>{SiteConf.Author}</h1>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <article className={styles.content}>
            <a href="../assets/images/about/pablo_magaz@codemotion_2018_3.jpg">
              <img src="../assets/images/about/Pablo_Magaz.jpg" alt="Pablo Magaz" />
            </a>
            <h1>About me</h1>
            <p>
              I'm {SiteConf.Author} and I've been working in the software world for more than 17 years. During that time,
              I've worked with different technologies and programming languages: From Php, Python, Android,
              Pl/Sql, to JavaScript, WebAssembly and Rust in latest years.
              <br />
              <br />
              Right now I work as Engineering Manager leading several teams and as
              JavaScript enthusiastic that I am, I really enjoy developing Front-End, Back-End and Mobile applications
              using:&nbsp;
              <a href="https://github.com/pmagaz/webpush-notification-server" target="_blank" rel="noopener noreferrer">
                NodeJs
              </a>
              ,{' '}
              <a href="https://github.com/atSistemas/react-base" target="_blank" rel="noopener noreferrer">
                React & React Native
              </a>
              ,{' '}
              <a href="https://github.com/pmagaz/redux-req-middleware" target="_blank" rel="noopener noreferrer">
                Redux
              </a>
              ,{' '}
              <a href="https://github.com/atSistemas/angular-base" target="_blank" rel="noopener noreferrer">
                Angular
              </a>
              ,{' '}
              <a href="https://pablomagaz.com/blog/empezando-con-webassembly" target="_blank" rel="noopener noreferrer">
                WebAssembly
              </a>
              ,{' '}
              <a href="https://github.com/pmagaz/rextore" target="_blank" rel="noopener noreferrer">
                RxJs
              </a>
              ,{' '}
              <a href="https://github.com/atSistemas/vue-base" target="_blank" rel="noopener noreferrer">
                Vue
              </a>
              , etc. Check my{' '}
              <a href="https://github.com/pmagaz" target="_blank" rel="noopener noreferrer">
                github
              </a>{' '}
              for more resources, including the{' '}
              <a href="https://github.com/pmagaz/pablomagaz.com" target="_blank" rel="noopener noreferrer">
                source code
              </a>{' '}
              of this isomorphic blog. <br />
              <br />
              Aside from software development, technical supervision and teams leading I also do technical workshops,
              team trainings and I'm speaker in different events around my country. Check out my talks!
            </p>
            <a id="talks" />
            <h2>Talks</h2>
            <ul>
              <li>
                Commit 2019: Rust & WebAssembly for JavaScripters.
                [
                  <a href="#RustYWebassemblyParaJavaScripters">
                  Video
                </a>
                ] [
                <a href="https://pablomagaz.com/static/slides/Pablo_Magaz_RustYWebAssemblyParaJavaScripters_CommitConf2019.pdf">
                  Slides
                </a>
                ]
              </li>
              <li>
                Codemotion 2018: ECMAScript 2018 and beyond.
                [
                  <a href="#ECMAScript2018YMasAlla">
                  Video
                </a>
                ] [
                <a href="https://pablomagaz.com/static/slides/Pablo_Magaz_ECMAScript2018YMasAlla_Codemotion2018.pdf">
                  Slides
                </a>
                ]
              </li>
              <li>
                Commit Conf 2018: ECMAScript 2018 and beyond. [
                <a href="https://pablomagaz.com/static/slides/Pablo_Magaz_ECMAScript2018YMasAlla_CommitConf2018.pdf">
                  Slides
                </a>
                ]
              </li>
              <li>
                JSDayES 2018: Writing Serviceworkers with Workbox.
                [
                  <a href="#EscribiendoServiceWorkersConWorkBox">
                  Video
                </a>
                ] [
                <a href="https://pablomagaz.com/static/slides/Pablo_Magaz_EscribiendoServicesWorkersConWorkbox_JSDayES2018.pdf">
                  Slides
                </a>
                ]
              </li>
              <li>
                Meetup En mi local funciona 2018: Introduction to Reactive programming with RxJs. [
                <a href="https://pablomagaz.com/static/slides/Pablo_Magaz_ProgramacionReactivaConRxJs_Codemotion2017.pdf">
                  Slides
                </a>
                ]
              </li>
              <li>
                Codemotion 2017: Reactive programming with RxJs.
                [
                  <a href="#ProgramacionReactivaRxJs">
                  Video
                </a>
                ] [
                <a href="https://pablomagaz.com/static/slides/Pablo_Magaz_ProgramacionReactivaConRxJs_Codemotion2017.pdf">
                  Slides
                </a>
                ]
              </li>
              <li>Codemotion 2016: Isomorphic apps with React & Redux.</li>
              <li>Open Expo 2016: Base showcase.</li>
            </ul>

            <ul className={styles.photos}>
              <li>
                <a href="../assets/images/about/pablo_magaz@codemotion_2018.jpg">
                  <img
                    src="../assets/images/about/pablo_magaz@codemotion_2018.jpg"
                    alt="Pablo Magaz @ Codemotion 2018 ECMAScript 2018 y mas alla"
                  />
                </a>
              </li>
              <li>
                <a href="../assets/images/about/pablo_magaz@JSDayES2018.jpg">
                  <img
                    src="../assets/images/about/pablo_magaz@JSDayES2018.jpg"
                    alt="Escribiendo service workers con Workbox"
                  />
                </a>
              </li>
              <li>
                <a href="../assets/images/about/pablo_magaz@commit_conf_2019_3.png">
                  <img
                    src="../assets/images/about/pablo_magaz@commit_conf_2019_3.png"
                    alt="Rust y WebAssembly para JavaScripters"
                  />
                </a>
              </li>
              <li>
                <a href="../assets/images/about/pablo_magaz@codemotion_2018_2.jpg">
                  <img
                    src="../assets/images/about/pablo_magaz@codemotion_2018_2.jpg"
                    alt="ECMAScript 2018 y mas alla"
                  />
                </a>
              </li>
              <li>
                <a href="../assets/images/about/pablo_magaz@commit_conf_2019.png">
                  <img
                    src="../assets/images/about/pablo_magaz@commit_conf_2019.png"
                    alt="Rust y WebAssembly para JavaScripters"
                  />
                </a>
              </li>
              <li>
                <a href="../assets/images/about/pablo_magaz@codemotion_2017.jpg">
                  <img
                    src="../assets/images/about/pablo_magaz@codemotion_2017.jpg"
                    alt="Introducción a la programación Reactiva@ Meetup En mi Local funciona 2017"
                  />
                </a>
              </li>
              <li>
                <a href="../assets/images/about/pablo_magaz@openexpo_22016.jpg">
                  <img
                    src="../assets/images/about/pablo_magaz@openexpo_22016.jpg"
                    alt="Introducción a la programación Reactiva@ Meetup En mi Local funciona 2017"
                  />
                </a>
              </li>
              <li>
                <a href="../assets/images/about/pablo_magaz@commit_conf_2019_2.png">
                  <img
                    src="../assets/images/about/pablo_magaz@commit_conf_2019_2.png"
                    alt="Rust y WebAssembly para JavaScripters"
                  />
                </a>
              </li>
              <li>
                <a href="../assets/images/pablo_magaz@commit_conf_2019.png">
                  <img
                    src="../assets/images/about/pablo_magaz@meetupRxJs22018.jpg"
                    alt="Rust y WebAssembly para JavaScripters"
                  />
                </a>
              </li>
              <li>
                <a href="../assets/images/about/pablo_magaz@codemotion_2016.jpg">
                  <img
                    src="../assets/images/about/pablo_magaz@codemotion_2016.jpg"
                    alt="Aplicaciones Isomorficas con React @ Codemotion 2016"
                  />
                </a>
              </li>
            </ul>
            <a id="ECMAScript2018YMasAlla" />
            <h2>ECMASCript 2018 y más allá @ Codemotion</h2>
            <div className={styles.videoWrapper}>
              <div className={styles.video}>
                <iframe
                  id="ytplayer"
                  type="text/html"
                  width="560"
                  height="349"
                  src="https://www.youtube.com/embed/ax83aGg5Vu4?autoplay=0&origin=http://pablomagaz.com"
                  frameBorder="0"
                />
              </div>
            </div>
            <a id="RustYWebassemblyParaJavaScripters" />
            <h2>Rust y WebAssembly for JavaScripters @ Commit Conf</h2>
            <div className={styles.videoWrapper}>
              <div className={styles.video}>
                <iframe
                  id="ytplayer"
                  type="text/html"
                  width="560"
                  height="349"
                  src="https://www.youtube.com/embed/mfu2syVX8fU?autoplay=0&origin=http://pablomagaz.com"
                  frameBorder="0"
                />
              </div>
            </div>
            <h2>Entrevista @ JSDayES</h2>
            <div className={styles.videoWrapper}>
              <div className={styles.video}>
                <iframe
                  id="ytplayer"
                  type="text/html"
                  width="560"
                  height="349"
                  src="https://www.youtube.com/embed/OszTUkhU1vQ?autoplay=0&origin=http://pablomagaz.com"
                  frameBorder="0"
                />
              </div>
            </div>
            <a id="EscribiendoServiceWorkersConWorkBox" />
            <h2>Escribiendo Service Workers con Workbox @ JSDayES</h2>
            <div className={styles.videoWrapper}>
              <div className={styles.video}>
                <iframe
                  id="ytplayer"
                  type="text/html"
                  width="560"
                  height="349"
                  src="https://www.youtube.com/embed/GjXwJdYa3J4?autoplay=0&origin=http://pablomagaz.com"
                  frameBorder="0"
                />
              </div>
            </div>
            <a id="ProgramacionReactivaRxJs" />
            <h2>Programación Reactiva con RxJs @ Codemotion</h2>
            <div className={styles.videoWrapper}>
              <div className={styles.video}>
                <iframe
                  id="ytplayer"
                  type="text/html"
                  width="560"
                  height="349"
                  src="https://www.youtube.com/embed/wnfrfTxJz58?autoplay=0&origin=http://pablomagaz.com"
                  frameBorder="0"
                />
              </div>
            </div>
            <h2>Contact</h2>
            <p>You can contact me in the following channels:</p>
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
