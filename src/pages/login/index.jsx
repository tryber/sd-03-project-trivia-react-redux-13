import React from 'react';
import Logo from '../../trivia.png';
import './style.css';

function Login() {
  return (
    <div className="flexbox">
      <div className="uk-vertical-align-middle size">
        <img className="uk-margin-bottom" width="306" height="104" src={Logo} alt="logo"/>
        <form className="uk-panel uk-panel-box uk-form">
          <div className="uk-form-row">
            <input
              className="uk-width-1-1 uk-form-large"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className="uk-form-row">
            <input
              className="uk-width-1-1 uk-form-large"
              type="text"
              placeholder="Nome"
            />
          </div>
          <div className="uk-form-row">
            <button className="uk-button uk-button-secondary uk-width-1-1">
              entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
