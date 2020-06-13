import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css';

const players = [
  {
    nome: 'Vanessa',
    pontuacao: 20,
  },
  {
    nome: 'Lucas',
    pontuacao: 50,
  },
  {
    nome: 'Mariangel',
    pontuacao: 90,
  },
];

function tableHead() {
  return (
    <thead>
      <tr>
        <th>Nome</th>
        <th>Pontuação</th>
      </tr>
    </thead>
  );
}

function tableBody() {
  return (
    <tbody>
      {players.map((player) => (
        <tr key={player.nome}>
          <th>{player.nome}</th>
          <th>{player.pontuacao}</th>
        </tr>
      ))}
    </tbody>
  );
}
class Ranking extends React.Component {

  componentDidMount() {
    const { name, score, picture } = this.props;
    localStorage.setItem('ranking', [name, score, picture]);
  //   if (!localStorage.getItem('ranking')) {
  //     localStorage.setItem('ranking', [name, score, picture]);
  //   }
  }

  render() {
    return (
      <div className="flexbox">
        <h4>Ranking</h4>
        <div>
          {tableHead()}
          {tableBody()}
        </div>
        <button data-testid="btn-go-home">
          <Link to="/">Início</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.player.score,
  picture: state.player.gravatarEmail,
});

Ranking.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Ranking);
