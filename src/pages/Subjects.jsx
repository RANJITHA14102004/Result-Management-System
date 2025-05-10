import React from 'react';
import './Subjects.css'; // optional styling file

const subjects = [
  { id: 1, name: 'Mathematics', teacher: 'Mr. Ramesh', credits: 4 },
  { id: 2, name: 'Science', teacher: 'Mrs. Kavitha', credits: 3 },
  { id: 3, name: 'English', teacher: 'Ms. Anusha', credits: 2 },
  { id: 4, name: 'Computer Science', teacher: 'Mr. Arjun', credits: 4 },
  { id: 5, name: 'Art', teacher: 'Ms. Deepa', credits: 1 },
];

const Subjects = () => {
  return (
    <div className="page-content">
      <h2>Subject List</h2>
      <table className="subjects-table">
        <thead>
          <tr>
            <th>Subject ID</th>
            <th>Subject Name</th>
            <th>Teacher</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.id}</td>
              <td>{subject.name}</td>
              <td>{subject.teacher}</td>
              <td>{subject.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subjects;
