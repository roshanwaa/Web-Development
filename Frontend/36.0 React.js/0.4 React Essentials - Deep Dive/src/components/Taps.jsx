import React from 'react';

export const Taps = ({ children, buttons, ButtonContainer = 'menu' }) => {
  //   const ButtonContainer = buttonContainer;

  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};
