import React from 'react';

export const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, playerSymbolIndex) => {
                return (
                  <li key={playerSymbolIndex}>
                    <button
                      disabled={playerSymbol !== null}
                      onClick={() => {
                        onSelectSquare(rowIndex, playerSymbolIndex);
                      }}>
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};
