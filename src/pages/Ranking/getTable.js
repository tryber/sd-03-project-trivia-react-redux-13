import React from 'react';

export const tableHead = () => (
  <thead>
    <tr>
      <th>Avatar</th>
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
        <tr key={`${player.name}-${index}`}>
          <th>
            <img className="ranking-img" src={player.picture} alt={player.name} />
          </th>
          <th data-testid={`player-name-${index}`}>{player.name}</th>
          <th data-testid={`player-score-${index}`}>{player.score}</th>
        </tr>
      ))}
  </tbody>
);
