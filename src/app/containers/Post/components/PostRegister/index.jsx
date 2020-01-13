import React from 'react';
import jsonp from 'jsonp';
import { setCookie, getCookie, SiteConf } from 'base';
import styles from './styles.css';

class PostRegister extends React.Component {
  
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
      }
    });
  }

  render() {
    const { status } = this.state;
    return (
      <div className={ styles.RegisterBoxWrap }>
        <div className={ styles.txt }>
          { status === 'register' && <span>¿Quieres recibir más post como este en tu email?</span> }
          { status === 'success' && <span>Gracias. Confirma la subscripción en tu correo.</span> }
          { status === 'sending' && <span>Enviando...</span> }
          { status === 'empty' && <span>Debes indicar tu email.</span> }
          { status === 'duplicate' && <span>Ya esta dado de alta.</span> }
          { status === 'error' && <span>Se produjo un error.</span> }
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className={ styles.form }>
            <input
              placeholder="Introduce tu email"
              type="email"
              key="EMAIL"
              required={ true }
              onChange={ ({ target }) => this.setState({ EMAIL: target.value }) }
              className={ styles.inputField }/>
            <button
              type="submit"
              className={ styles.inputButton }
            >
            Subscribirse
            </button>
          </div>
        </form>
      </div>
    );
  };
};

export default PostRegister;