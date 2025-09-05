import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cgpa, semesters } = location.state || { cgpa: 0, semesters: [] };

  const status = (() => {
    const num = parseFloat(cgpa);
    if (isNaN(num)) return 'Unknown';
    if (num >= 8.0) return 'Excellent';
    if (num >= 7.0) return 'Good';
    if (num >= 6.0) return 'Average';
    if (num > 0) return 'Poor';
    return 'Not calculated';
  })();

  // Saving/history has been removed; this view only displays results.

  return (
    <div className="container">
      <div className="result-summary">
        <h2>Your Final CGPA is:</h2>
        <div className="cgpa-row">
          <p className="cgpa-score">{cgpa}</p>
          <span className={`cgpa-badge ${status.toLowerCase().replace(/\s/g,'-')}`}>{status}</span>
        </div>
        <div className="semester-breakdown">
          <h3>Semester Details:</h3>
          {semesters.map((semester, index) => (
            <div key={index} className="semester-result-item">
              <h4>Semester {index + 1} GPA: {semester.gpa || 'Not Calculated'}</h4>
            </div>
          ))}
        </div>
        <div className="result-actions">
          <button className="back-btn" onClick={() => navigate('/')}>Back to Calculator</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
