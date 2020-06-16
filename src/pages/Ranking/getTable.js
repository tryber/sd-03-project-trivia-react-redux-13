import React from 'react';

export const tableHead = () => (
  <thead>
    <tr>
      <th>Nome</th>
      <th>Pontuação</th>
    </tr>
  </thead>
);

export const tableBody = (players) => (
  <tbody>
    {players
      .sort((a, b) => b.score - a.score)
      .map((player, index) => (
        <tr key={player.name}>
          <th>
            <img src={player.picture} alt={player.name} />
          </th>
          <th data-testeid={`player-name-${index}`}>{player.name}</th>
          <th data-testeid={`player-score-${index}`}>{player.score}</th>
        </tr>
      ))}
  </tbody>
);
