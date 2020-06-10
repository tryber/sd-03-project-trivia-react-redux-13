import React from 'react';
// import { Redirect } from 'react-router-dom';
import Logo from '../../trivia.png';
import './style.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'a',
      email: 'a',
    };
  }

  loginButton() {
    return (
      <div>
        {this.state.email.length < 3 || this.state.name.length < 2 ? (
          <div className="uk-form-row">
            <button
              disabled
              className="uk-button uk-button-secondary uk-width-1-1"
              data-testid="btn-play"
            >
              entrar
            </button>
          </div>
        ) : (
          <div className="uk-form-row">
            <button
              className="uk-button uk-button-secondary uk-width-1-1"
              data-testid="btn-play"
            >
              entrar
            </button>
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="flexbox">
        <div className="uk-vertical-align-middle size">
          <img className="uk-margin-bottom" width="306" height="104" src={Logo} alt="logo" />

          <form className="uk-panel uk-panel-box uk-form">
            <div className="uk-form-row">
              <input onInput={(e) => this.setState({ email: e.target.value })}
                data-testid="input-gravatar-email" className="uk-width-1-1 uk-form-large"
                type="email" placeholder="E-mail" />
            </div>

            <div className="uk-form-row">
              <input onInput={(e) => this.setState({ name: e.target.value })}
                data-testid="input-player-name"
                className="uk-width-1-1 uk-form-large"
                type="text" placeholder="Nome" />
            </div>

            <div className="uk-form-row"> {this.loginButton()} </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
