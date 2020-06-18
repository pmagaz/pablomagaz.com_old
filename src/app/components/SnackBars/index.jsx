import { pure } from 'recompose';
import jsonp from 'jsonp';
import { setCookie, getCookie, isValidEmail, SiteConf } from 'base';
import React, { Component } from 'react';
import SnackBar from 'components/SnackBar';
import classNames from 'classnames/bind';
import styles from './styles.css';

class SnackBars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'register',
      notifications: true,
      snackBarDelay: 200,
      showSnackCookieBar: false,
      hideSnackCookieBar: false,
      showSnackNotificationBar: false,
      hideSnackBar: false
    };
    this.aceptCookies.bind(this);
    this.notificationPermission.bind(this);
    const cx = classNames.bind(styles);
    this.checkboxStyles = cx({
      control: true,
      controlCheckbox: true
    });
  }

  handleSubmit(env) {
    env.preventDefault();
    const path = `${ SiteConf.mailListUrl }&EMAIL=${encodeURIComponent(this.state.email) }`;
    const url = path.replace('/post?', '/post-json?');
    let email = this.state.email;
    (email && !isValidEmail(email)) ? this.setState({ status: "invalid" }) : this.registerEmail(url);
  };

  registerEmail(url) {
    if(this.state.email){
      jsonp(url, { param: 'c' }, (err, data) => {
        if (data.msg.includes('already subscribed')) {
          this.setState({ status: 'duplicate' });
        } else if (err) {
          this.setState({ status: 'error' });
        } else if (data.result !== 'success') {
          this.setState({ status: 'error' });
        } else {
          this.setState({ status: 'success' });
          const { email } = this.state;
          setCookie(SiteConf.cookieMailSubscription, email, 200);
          setTimeout(() => { this.setState({ hideSnackBar: true }) }, 1000);
          if (this.state.notifications) {
            setTimeout(() => { this.notificationPermission() }, 1800);
          }
        }
      });
  } else {
    if(!this.state.notifications) {
     this.setState({ status: 'none' });
    } else {
    this.setState({ status: 'success' });
      setTimeout(() => { this.setState({ hideSnackBar: true }) }, 1000);
      if (this.state.notifications) {
        setTimeout(() => { this.notificationPermission() }, 1800);
        }
      }
    }
  }

  eventHandler = e => {
    //this.showRegisterSnack();
    if (!getCookie(SiteConf.cookieAceptCookies)) this.aceptCookies();
    if (!getCookie(SiteConf.cookieMailSubscription)) this.showRegisterSnack();
    window.removeEventListener('click', this.eventHandler);
    window.removeEventListener('scroll', this.eventHandler);
  };

  checkBoxHandler = e => {
    this.setState({ notifications: !this.state.notifications });
  }
  
  componentDidMount() {
    if (!getCookie(SiteConf.cookieAceptCookies)) this.showCookiesSnack();
    window.addEventListener('click', this.eventHandler);
    window.addEventListener('scroll', this.eventHandler);
    if ('PushManager' in window) {
      const { permission } = Notification;
      if (permission === 'granted') this.regenerateSubscription();
    }
  }

  acceptAndRequest(permission) {
    if (!getCookie(SiteConf.cookieAceptCookies)) this.aceptCookies();
    if (!getCookie(SiteConf.cookieMailSubscription)) this.showNoticationBar(permission);
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
    setCookie(SiteConf.cookieMailSubscription, false, 600);
    setCookie(SiteConf.cookiePushNotifications, false, 600);
    this.setState({ hideSnackBar: true });
  }

  showCookiesSnack() {
    setTimeout(() => {
      this.setState({ showSnackCookieBar: true });
    }, 800);
  }

  async notificationPermission() {
    setCookie(SiteConf.cookiePushNotifications, true, 1000);
    const permission = await askPermission();
    if (permission) generateSubscription();
    this.setState({ hideSnackBar: true });
  }

  async showRegisterSnack() {
    setTimeout(() => {
      this.setState({ showSnackNotificationBar: true });
    }, this.state.snackBarDelay);
  }

  render() {
    const { status } = this.state;
    const snackCookieBar = (
      <SnackBar position="bottom" exit={ this.state.hideSnackCookieBar }>
        Este sitio usa cookies propias y de terceros. Al continuar navegando aceptas su uso.
      </SnackBar>
    );

    const snackNotificationBar = (
      <SnackBar buttons={ true } position="top" exit={ this.state.hideSnackBar }>
        <div className={ styles.RegisterBoxWrap }>
          <div className={ styles.txt }>
            { status === 'register' && <span>Subscríbete a El Blog Isomórfico.</span> }
            { status === 'success' && <span>Gracias.</span> }
            { status === 'sending' && <span>Enviando...</span> }
            { status === 'none' && <span>Selecciona un canal de subscripción.</span> }
            { status === 'duplicate' && <span>Ya esta dado de alta.</span> }
            { status === 'error' && <span>Se produjo un error.</span> }
            { status === 'invalid' && <span>El email no parece correcto.</span> }
          </div>
          <form className={ styles.registerForm } >
            <span className={ styles.txt2 }>
            Puedes subscribirte por varios canales. 
            </span>
             <div className={ styles.registerFormContent }>
              <ul className={ styles.Ul }>
             <div>Email:&nbsp;&nbsp;&nbsp;&nbsp;<input
                type="text"
                key="email"
                required={ true }
                onChange={ ({ target }) => this.setState({ email: target.value }) }
                className={ styles.inputField }/>
             </div>
            <div>
             <label className={ this.checkboxStyles }>
              Notificaciones Web: 
                <input
                  id="notifications"
                  name="notifications"
                  type="checkbox"
                  key="notifications"
                  defaultChecked={ this.state.notifications }
                  onChange={ this.checkBoxHandler } />
                  
                <div className={ styles.controlIndicator }></div>
              </label>
              </div>
              <div><a href={ `${SiteConf.ServerUrl}/rss` }
              target="_blank"
              rel="noopener noreferrer">RSS</a> o a través de
            <a
              aria-label="Pablo Magaz Twitter"
              role="button"
              tabIndex="0"
              href="https://twitter.com/pablo_magaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a></div>
            </ul>
            </div>
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
