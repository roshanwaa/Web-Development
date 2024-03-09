import React from 'react';

export const PlayerLog = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            <h4>
              {turn.player} Selected {turn.square.row}, {turn.square.col}
            </h4>
          </li>
        );
      })}
    </ol>
  );
};
