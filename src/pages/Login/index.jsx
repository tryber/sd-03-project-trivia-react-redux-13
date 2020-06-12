import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../trivia.png';
import IconConfig from './config.png';
import { fetchApiTriviaToken } from '../../services/apiRequest';
import { requestFetch, infoState } from '../../action';
import './style.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
    this.handleGame = this.handleGame.bind(this);
  }

  async handleGame() {
    const { getData, setInfo } = this.props;
    const { email, name } = this.state;
    await fetchApiTriviaToken();
    getData();
    setInfo(email, name);
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
              Jogar
            </button>
          </div>
        ) : (
          <div className="uk-form-row">
            <Link to="/play">
              <button
                className="uk-button uk-button-secondary uk-width-1-1"
                data-testid="btn-play"
                onClick={this.handleGame}
              >
                Entrar
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="flexbox">
        <div className="uk-vertical-align-middle size">
          <Link to="/settings"> <button className="btn-icon" data-testid="btn-settings" >
            <img src={IconConfig} alt="config" className="icon" />
          </button>
          </Link>
          <img className="uk-margin-bottom" width="306" height="104" src={Logo} alt="logo" />

          <form className="uk-panel uk-panel-box uk-form">
            <div className="uk-form-row">
              <input
                onInput={(e) => this.setState({ email: e.target.value })}
                data-testid="input-gravatar-email" className="uk-width-1-1 uk-form-large"
                type="email" placeholder="E-mail"
              />
            </div>

            <div className="uk-form-row">
              <input
                onInput={(e) => this.setState({ name: e.target.value })}
                data-testid="input-player-name"
                className="uk-width-1-1 uk-form-large"
                type="text" placeholder="Nome"
              />
            </div>

            <div className="uk-form-row"> {this.loginButton()} </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispacthToProps = (dispatch) => ({
  getData: () => dispatch(requestFetch()),
  setInfo: (email, name) => dispatch(infoState(email, name)),
});

Login.propTypes = {
  getData: PropTypes.func.isRequired,
  setInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispacthToProps)(Login);
