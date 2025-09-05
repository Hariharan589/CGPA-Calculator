import React from 'react';
import CourseForm from './CourseForm';
import './Semester.css';

const Semester = ({ semester, semesterIndex, onSemesterChange, onRemoveSemester }) => {
  const gradePoints = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'U': 0 };

  const calculateGPA = () => {
    let totalCredits = 0;
    let weightedSum = 0;

    semester.courses.forEach(course => {
      const credits = parseFloat(course.credits);
      const gradePoint = gradePoints[course.grade];

      if (!isNaN(credits) && credits > 0) {
        totalCredits += credits;
        weightedSum += credits * gradePoint;
      }
    });

    const gpa = totalCredits > 0 ? (weightedSum / totalCredits) : 0;
    onSemesterChange(semesterIndex, { ...semester, gpa: gpa.toFixed(2) });
  };

  const handleCoursesChange = (courses) => {
    onSemesterChange(semesterIndex, { ...semester, courses });
  };

  return (
    <div className="semester-container">
      <div className="semester-header">
        <h3>Semester {semesterIndex + 1}</h3>
        <button onClick={() => onRemoveSemester(semesterIndex)} className="remove-semester-btn">Remove Semester</button>
      </div>
      <CourseForm courses={semester.courses} setCourses={handleCoursesChange} />
      <button onClick={calculateGPA} className="calculate-gpa-btn">Calculate Semester GPA</button>
      {semester.gpa && <p className="semester-gpa">Semester GPA: {semester.gpa}</p>}
    </div>
  );
};

export default Semester;
