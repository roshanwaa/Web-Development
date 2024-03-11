import React, { useState } from 'react';

const INVESTMENT = {
  initialInvestment: 10000,
  annulInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
export const UserInput = () => {
  const [userInput, setUserInput] = useState(INVESTMENT);

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((previousValue) => {
      console.log({
        ...previousValue,
        [inputIdentifier]: newValue,
      });
      return {
        ...previousValue,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => {
              handleChange('initialInvestment', e.target.value);
            }}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annulInvestment}
            onChange={(e) => {
              handleChange('annulInvestment', e.target.value);
            }}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => {
              handleChange('expectedReturn', e.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => {
              handleChange('duration', e.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
};
