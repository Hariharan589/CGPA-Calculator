import React from 'react';
import './CourseForm.css';

const CourseForm = ({ courses, setCourses }) => {
  const handleCourseChange = (index, event) => {
    const values = [...courses];
    values[index][event.target.name] = event.target.value;
    setCourses(values);
  };

  const addCourse = () => {
    setCourses([...courses, { name: '', credits: '', grade: 'O' }]);
  };

  const removeCourse = (index) => {
    const values = [...courses];
    values.splice(index, 1);
    setCourses(values);
  };

  return (
    <div className="course-form">
      {courses.map((course, index) => (
        <div className="course-row" key={index}>
          <input
            type="text"
            name="name"
            placeholder="Course Name (Optional)"
            value={course.name}
            onChange={(e) => handleCourseChange(index, e)}
          />
          <input
            type="number"
            name="credits"
            placeholder="Credits"
            value={course.credits}
            onChange={(e) => handleCourseChange(index, e)}
            min="0"
          />
          <select
            name="grade"
            value={course.grade}
            onChange={(e) => handleCourseChange(index, e)}
          >
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="U">U</option>
          </select>
          <button className="remove-btn" onClick={() => removeCourse(index)}>Remove</button>
        </div>
      ))}
      <button className="add-btn" onClick={addCourse}>Add Course +</button>
    </div>
  );
};

export default CourseForm;
