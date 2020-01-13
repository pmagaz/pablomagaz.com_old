import { pure } from 'recompose';
import jsonp from 'jsonp';

import { setCookie, getCookie, SiteConf } from 'base';
import React, { Component } from 'react';
import SnackBar from 'components/SnackBar';
import Register from 'components/Register';
import classNames from 'classnames/bind';
import styles from './styles.css';

class SnackBars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'register',
      permisionDelay: 7000,
      showSnackCookieBar: false,
      hideSnackCookieBar: false,
      showSnackNotificationBar: false,
      hideSnackNotificationBar: false
    };
    this.aceptCookies.bind(this);
    this.notificationPermission.bind(this);
    SiteConf.cookieDenyNotificationss = 'EBISODenyNotifications';
    const cx = classNames.bind(styles);
    this.checkboxStyles = cx({
      control: true,
      controlCheckbox: true
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const path = `${ SiteConf.mailListUrl }&EMAIL=${encodeURIComponent(this.state.EMAIL) }`;
    const url = path.replace('/post?', '/post-json?');
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    (!regex.test(this.state.EMAIL)) ? this.setState({ status: "invalid" }) : this.sendData(url);
    console.log(1111111);
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
        setCookie(SiteConf.cookieMailSubscription, true, 300);
        setTimeout(() => this.setState({ hideSnackNotificationBar: true }), 2000);
      }
    });
    //this.notificationPermission();
  }

  eventHandler = e => {
    if ('PushManager' in window) {
      const { permission } = Notification;
      this.acceptAndRequest(permission);
    } else {
      this.acceptAndRequest('granted');
    }
  };

  componentDidMount() {
    if (!getCookie(SiteConf.cookieAceptCookies)) this.showCookieMsg();
    window.addEventListener('click', this.eventHandler);
    window.addEventListener('scroll', this.eventHandler);
    if ('PushManager' in window) {
      const { permission } = Notification;
      if (permission === 'granted') this.regenerateSubscription();
    }
    this.setState({ showSnackNotificationBar: true });

  }

  acceptAndRequest(permission) {
    if (!getCookie(SiteConf.cookieAceptCookies)) this.aceptCookies();
    if (permission === 'default') this.showNoticationBar(permission);
    window.removeEventListener('click', this.eventHandler);
    window.removeEventListener('scroll', this.eventHandler);
  }

  async regenerateSubscription() {
    setTimeout(() => generateSubscription(), 2000);
  }

  aceptCookies() {
    setCookie(SiteConf.cookieAceptCookies, true, 1000);
    this.setState({ hideSnackCookieBar: true });
  }

  denyPermision() {
    setCookie(SiteConf.cookieDenyNotificationss, true, 600);
    this.setState({ hideSnackNotificationBar: true });
  }

  showCookieMsg() {
    setTimeout(() => {
      this.setState({ showSnackCookieBar: true });
    }, 800);
  }

  async notificationPermission() {
    const permission = await askPermission();
    if (permission) generateSubscription();
    this.setState({ hideSnackNotificationBar: true });
  }

  async showNoticationBar(permission) {
    setTimeout(() => {
      if (!getCookie(SiteConf.cookieDenyNotificationss) && permission !== 'granted') {
        this.setState({ showSnackNotificationBar: true });
      }
    }, this.state.permisionDelay);
  }

  render() {
    const { status } = this.state;
    const snackCookieBar = (
      <SnackBar position="bottom" exit={ this.state.hideSnackCookieBar }>
        Este sitio usa cookies propias y de terceros. Al continuar navegando aceptas su uso.
      </SnackBar>
    );

    const snackNotificationBar = (
      <SnackBar buttons={ true } position="top" exit={ this.state.hideSnackNotificationBar }>
        <div className={ styles.RegisterBoxWrap }>
          <div className={ styles.txt }>
            { status === 'register' && <span>Subscribete a El Blog Isomórfico</span> }
            { status === 'success' && <span>Gracias. Confirma la subscripción en tu correo.</span> }
            { status === 'sending' && <span>Enviando...</span> }
            { status === 'empty' && <span>Debes indicar tu email.</span> }
            { status === 'duplicate' && <span>Ya esta dado de alta.</span> }
            { status === 'error' && <span>Se produjo un error.</span> }
            { status === 'invalid' && <span>El email no parece correcto.</span> }
          </div>
          <form className={ styles.registerForm } >
            <div className={ styles.registerFormContent }>
              <input
                placeholder="Introduce tu email"
                type="email"
                key="EMAIL"
                required={ true }
                onChange={ ({ target }) => this.setState({ EMAIL: target.value }) }
                className={ styles.inputField }/>
              <label className={ this.checkboxStyles }>
              Recibir notificaciones push
                <input
                  id="notifications"
                  name="notifications"
                  type="checkbox"
                  key="NOTIFICATIONS"
                  checked={ true }
                  onChange={ ({ target }) => this.setState({ NOTIFICATIONS: target.value }) }>
                </input>
                <div className={ styles.controlIndicator }></div>
              </label>
              
            </div>
              Sigue el blog en
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
            <div className={ styles.content }>
              <button className={ styles.buttonKo } role="button" tabIndex="0" onClick={ () => this.denyPermision() }>
                No gracias
              </button>
              <button className={ styles.buttonOk } role="button" tabIndex="1" type="button" onClick={ (env) => this.handleSubmit(env) }>
                Subscribirse
              </button>
            </div>
          </form>
        </div>

      </SnackBar>
    );

    const SnackCookieBar = this.state.showSnackCookieBar ? snackCookieBar : null;
    const SnackNotificationBar = this.state.showSnackNotificationBar ? snackNotificationBar : null;

    return (
      <div>
        { SnackCookieBar }
        { SnackNotificationBar }
      </div>
    );
  }
}

export default pure(SnackBars);
