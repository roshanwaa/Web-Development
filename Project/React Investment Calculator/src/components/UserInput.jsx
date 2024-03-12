import React from 'react';

export const UserInput = ({ userInput, onChangeInput }) => {
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
              onChangeInput('initialInvestment', e.target.value);
            }}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annulInvestment}
            onChange={(e) => {
              onChangeInput('annulInvestment', e.target.value);
            }}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => {
              onChangeInput('expectedReturn', e.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => {
              onChangeInput('duration', e.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
};
