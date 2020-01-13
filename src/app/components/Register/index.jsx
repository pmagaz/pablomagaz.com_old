import React from 'react';
import jsonp from 'jsonp';
import { setCookie, SiteConf } from 'base';
import styles from './styles.css';

class Register extends React.Component {
  
  state = {
    status: 'register'
  };

  handleSubmit(evt) {
    evt.preventDefault();
    const path = `${ SiteConf.mailListUrl }&EMAIL=${encodeURIComponent(this.state.EMAIL) }`;
    const url = path.replace('/post?', '/post-json?');
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    (!regex.test(this.state.EMAIL)) ? this.setState({ status: "empty" }) : this.sendData(url);
  };

  sendData(url) {
    this.setState({ status: 'sending' });
    jsonp(url, { param: 'c' }, (err, data) => {
      if (data.msg.includes('already subscribed')) {
        this.setState({ status: 'duplicate' });
      } else if (err) {
        this.setState({ status: 'error' });
      } else if (data.result !== 'success') {
        this.setState({ status: 'error' });
      } else {
        this.setState({ status: 'success' });
        setCookie(SiteConf.cookieMailSubscription, true, 60);
      }
    });
  }

  render() {
    const { status } = this.state;
    return (
      <div className={ styles.RegisterBoxWrap }>
        <div className={ styles.txt }>
          { status === 'register' && <span>Subscribete a El Blog Isomórfico</span> }
          { status === 'success' && <span>Gracias. Confirma la subscripción en tu correo.</span> }
          { status === 'sending' && <span>Enviando...</span> }
          { status === 'empty' && <span>Debes indicar tu email.</span> }
          { status === 'duplicate' && <span>Ya esta dado de alta.</span> }
          { status === 'error' && <span>Se produjo un error.</span> }
        </div>
        <form onSubmit={ this.handleSubmit.bind(this) } className={ styles.registerForm } >
          <div className={ styles.registerFormContent }>
            <input
              placeholder="Introduce tu email"
              type="email"
              key="EMAIL"
              required={ true }
              onChange={ ({ target }) => this.setState({ EMAIL: target.value }) }
              className={ styles.inputField }/>
          </div>
        </form>
        ¿Quieres recibir notificaciones de los nuevos posts?. Nunca recibir&aacute;s m&aacute;s de una al mes. También puedes seguir el blog en
        <a
          aria-label="Pablo Magaz Twitter"
          role="button"
          tabIndex="0"
          href="https://twitter.com/pablo_magaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a> y 
        <a
          aria-label="Pablo Magaz Linkedin"
          role="button"
          tabIndex="0"
          href="https://www.linkedin.com/in/pablo-magaz-05b46763/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    );
  };
};

export default Register;