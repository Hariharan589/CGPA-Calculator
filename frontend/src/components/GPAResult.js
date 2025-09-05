import React from 'react';
import './GPAResult.css';

const GPAResult = ({ gpa }) => {
  return (
    <div className="gpa-result">
      <h2>Your GPA is:</h2>
      <p className="gpa-score">{gpa}</p>
    </div>
  );
};

export default GPAResult;
