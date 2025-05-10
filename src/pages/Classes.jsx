import React from 'react';
import './Classes.css'; // optional if you want to style it

const timetable = [
  { day: 'Monday', subject: 'Mathematics', time: '10:00 AM - 11:00 AM' },
  { day: 'Monday', subject: 'Science', time: '11:15 AM - 12:15 PM' },
  { day: 'Tuesday', subject: 'English', time: '10:00 AM - 11:00 AM' },
  { day: 'Tuesday', subject: 'History', time: '11:15 AM - 12:15 PM' },
  { day: 'Wednesday', subject: 'Computer Science', time: '10:00 AM - 11:00 AM' },
  { day: 'Wednesday', subject: 'Art', time: '11:15 AM - 12:15 PM' },
];

const Classes = () => {
  return (
    <div className="page-content">
      <h2>Class Timetable</h2>
      <table className="timetable-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>{entry.subject}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classes;
