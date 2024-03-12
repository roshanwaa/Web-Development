import React from 'react';
import { calculateInvestmentResults } from '../util/investment.js';

export const Result = ({ input }) => {
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);

  return (
    <>
      <p> {'Result...'} </p>
    </>
  );
};
