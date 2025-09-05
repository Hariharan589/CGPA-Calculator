import React, { useState, useEffect } from 'react';
import { api } from '../api';
import './History.css';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
  const res = await api.get('/api/cgpa/history');
        setHistory(res.data);
      } catch (error) {
        console.error('Error fetching history', error);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="container">
      <h1>Calculation History</h1>
      <div className="history-list">
        {history.map((entry) => (
          <div key={entry._id} className="history-item">
            <p><strong>CGPA:</strong> {entry.cgpa.toFixed(2)}</p>
            <p><strong>Date:</strong> {new Date(entry.createdAt).toLocaleDateString()}</p>
            <ul>
              {entry.courses.map((course, index) => (
                <li key={index}>{course.name || 'Unnamed Course'} - Credits: {course.credits}, Grade: {course.grade}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
