import React, { useState } from 'react';
import { Header } from './components/Header';
import { UserInput } from './components/UserInput';
import { Result } from './components/Result';

const INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
function App() {
  const [userInput, setUserInput] = useState(INVESTMENT);

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((previousValue) => {
      return {
        ...previousValue,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Result input={userInput} />
    </>
  );
}

export default App;
