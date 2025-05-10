import React, { useState } from 'react';
import './Dashboard.css';

const AdminDashboard = () => {
  const [results, setResults] = useState([
    { id: 1, name: 'Alice', subject: 'Math', score: 85 },
    { id: 2, name: 'Bob', subject: 'Science', score: 90 },
    { id: 3, name: 'Charlie', subject: 'English', score: 78 }
  ]);

  const [newResult, setNewResult] = useState({ name: '', subject: '', score: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    setResults(results.filter((r) => r.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (newResult.name && newResult.subject && newResult.score) {
      setResults([...results, { ...newResult, id: results.length + 1 }]);
      setNewResult({ name: '', subject: '', score: '' });
    }
  };

  const handleEdit = (id) => {
    const resultToEdit = results.find((r) => r.id === id);
    setNewResult(resultToEdit);
    setIsEditing(true);
    setEditId(id);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedResults = results.map((r) =>
      r.id === editId ? { ...r, ...newResult } : r
    );
    setResults(updatedResults);
    setNewResult({ name: '', subject: '', score: '' });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="dashboard-content">
      <h2>Admin Dashboard</h2>

      <div className="add-form">
        <h3>{isEditing ? 'Edit Student Result' : 'Add New Student Result'}</h3>
        <form onSubmit={isEditing ? handleSaveEdit : handleAdd}>
          <input
            type="text"
            placeholder="Student Name"
            value={newResult.name}
            onChange={(e) => setNewResult({ ...newResult, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={newResult.subject}
            onChange={(e) => setNewResult({ ...newResult, subject: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Score"
            value={newResult.score}
            onChange={(e) => setNewResult({ ...newResult, score: e.target.value })}
            required
          />
          <button type="submit">{isEditing ? 'Save Changes' : 'Add Result'}</button>
        </form>
      </div>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.subject}</td>
              <td>{r.score}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(r.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(r.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

