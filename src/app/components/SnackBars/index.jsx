import { pure } from 'recompose';
import { setCookie, getCookie } from 'base';
import React, { Component } from 'react';
import SnackBar from 'components/SnackBar';
import styles from './styles.css';

class SnackBars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permisionDelay: 12000,
      showSnackCookieBar: false,
      hideSnackCookieBar: false,
      showSnackNotificationBar: false,
      hideSnackNotificationBar: false
    };
    this.aceptCookies.bind(this);
    this.notificationPermission.bind(this);
    this.aceptedCookies = 'EBISOAceptedCookies';
    this.denyNotifications = 'EBISODenyNotifications';
  }

  componentDidMount() {
    if (!getCookie(this.aceptedCookies)) this.showCookieMsg();
    const { permission } = Notification;
    if (permission === 'granted') this.regenerateSubscription();

    window.addEventListener('click', e => {
      if (!getCookie(this.aceptedCookies)) this.aceptCookies();
      if (permission === 'default') this.showNoticationBar();
    });
  }

  async regenerateSubscription() {
    setTimeout(() => {
      generateSubscription();
    }, 2000);
  }

  aceptCookies() {
    setCookie(this.aceptedCookies, true, 1000);
    this.setState({ hideSnackCookieBar: true });
  }

  denyPermision() {
    setCookie(this.denyNotifications, true, 600);
    this.setState({ hideSnackNotificationBar: true });
  }

  showCookieMsg() {
    setTimeout(() => {
      this.setState({ showSnackCookieBar: true });
    }, 2000);
  }

  async notificationPermission() {
    const permission = await askPermission();
    if (permission) {
      const subscription = await generateSubscription();
    }
    this.setState({ hideSnackNotificationBar: true });
  }

  async showNoticationBar() {
    setTimeout(() => {
      const { permission } = Notification;
      if (!getCookie(this.denyNotifications) && permission !== 'granted') {
        this.setState({ showSnackNotificationBar: true });
      }
    }, this.state.permisionDelay);
  }

  render() {
    const snackCookieBar = (
      <SnackBar position="bottom" exit={ this.state.hideSnackCookieBar }>
        Este sitio usa cookies para analíticas. Al continuar navegando aceptas los términos.
      </SnackBar>
    );

    const snackNotificationBar = (
      <SnackBar buttons={ true } position="top" exit={ this.state.hideSnackNotificationBar }>
        ¿Quieres recibir notificaciones sobre las novedades del blog?. Nunca recibirás más de una al mes. También puedes
        seguir las novedades del blog en
        <a
          aria-label="Pablo Magaz Twitter"
          role="button"
          tabIndex="0"
          href="https://twitter.com/pablo_magaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <div className={ styles.content }>
          <button className={ styles.buttonKo } role="button" tabIndex="0" onClick={ () => this.denyPermision() }>
            No gracias
          </button>
          <button className={ styles.buttonOk } role="button" tabIndex="1" onClick={ () => this.notificationPermission() }>
            Acepto
          </button>
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
