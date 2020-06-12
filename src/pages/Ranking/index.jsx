import React from 'react';
import { Link } from 'react-router-dom';

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
class Ranking extends React.Component {
  constructor(props) {
    super(props);
  }

  tableHead() {
    return (
      <thead>
        <tr>
          <th>Nome</th>
          <th>Pontuação</th>
        </tr>
      </thead>
    );
  }

  tableBody() {
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

  render() {
    return (
      <div className="flexbox">
        <h4>Ranking</h4>
        <div>
          {this.tableHead()}
          {this.tableBody()}
        </div>
        <button data-testid="btn-go-home">
          <Link to="/">Início</Link>
        </button>
      </div>
    );
  }
}

// function Login() {
//   return (
//     <div className='flexbox'>
//       Teste
//     </div>
//   );
// }

export default Ranking;
