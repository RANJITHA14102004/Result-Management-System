import React, { useState } from 'react';
import './Dashboard.css';

const StudentDashboard = ({ role }) => {
  const [results, setResults] = useState([
    { id: 1, name: 'Alice', subject: 'Math', score: 85 },
    { id: 2, name: 'Bob', subject: 'Science', score: 90 },
    { id: 3, name: 'Charlie', subject: 'English', score: 78 }
  ]);

  const isAdmin = role === 'admin';

  const handleDelete = (id) => {
    setResults(results.filter((r) => r.id !== id));
  };

  return (
    <div className="dashboard">
      <h2>{isAdmin ? 'Admin Dashboard' : 'Student Dashboard'}</h2>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Score</th>
            {isAdmin && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.subject}</td>
              <td>{r.score}</td>
              {isAdmin && (
                <td>
                  <button onClick={() => handleDelete(r.id)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;
