import React, { useState } from 'react';

export const Player = ({ initialName, symbol, isActive, onChnageName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChnageName(symbol, playerName);
    }
  };

  const handleChangeName = (e) => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        onChange={handleChangeName}
        required
        value={playerName}
      />
    );
  }

  return (
    <>
      <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {/* {isEditing ? (
            <input type="text" />
          ) : (
            <span className="player-name">{name}</span>
          )} */}
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'SAVE' : 'EDIT'}</button>
      </li>
    </>
  );
};
