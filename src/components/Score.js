import React from 'react';

const Score = ({ score, bestScore }) => {
  return (
    <div>
      <div className="current-score">Current score:{score} </div>
      <div className="best-score">Best score:{bestScore} </div>
    </div>
  );
};

export default Score;
