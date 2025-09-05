import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Semester from '../components/Semester';
import './Home.css';

const Home = () => {
  const [semesters, setSemesters] = useState([{ courses: [{ name: '', credits: '', grade: 'O' }], gpa: null }]);
  const navigate = useNavigate();

  const addSemester = () => {
    setSemesters([...semesters, { courses: [{ name: '', credits: '', grade: 'O' }], gpa: null }]);
  };

  const handleSemesterChange = (index, updatedSemester) => {
    const newSemesters = [...semesters];
    newSemesters[index] = updatedSemester;
    setSemesters(newSemesters);
  };

  const removeSemester = (index) => {
    const newSemesters = semesters.filter((_, i) => i !== index);
    setSemesters(newSemesters);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let weightedSum = 0;
    const gradePoints = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'U': 0 };

    semesters.forEach(semester => {
      semester.courses.forEach(course => {
        const credits = parseFloat(course.credits);
        const gradePoint = gradePoints[course.grade];
        if (!isNaN(credits) && credits > 0) {
          totalCredits += credits;
          weightedSum += credits * gradePoint;
        }
      });
    });

    const cgpa = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : 0;
    navigate('/result', { state: { cgpa, semesters } });
  };

  return (
    <div className="container">
      <div className="home-header">
        <div className="home-title">Academic Semesters</div>
        <button onClick={addSemester} className="add-semester-btn">Add Semester +</button>
      </div>

      {semesters.length === 0 && (
        <div className="empty-state">No semesters added yet. Click "Add Semester" to start tracking your academic progress.</div>
      )}

      {semesters.map((semester, index) => (
        <Semester
          key={index}
          semester={semester}
          semesterIndex={index}
          onSemesterChange={handleSemesterChange}
          onRemoveSemester={removeSemester}
        />
      ))}

      <div className="home-actions" style={{marginTop: 16}}>
        <button onClick={calculateCGPA} className="calculate-cgpa-btn">Calculate CGPA</button>
      </div>
    </div>
  );
};

export default Home;
