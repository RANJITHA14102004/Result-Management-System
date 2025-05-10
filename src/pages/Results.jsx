// import React from 'react';
// import './Dashboard.css';

// const allResults = [
//   { id: 1, email: 'student1@example.com', subject: 'Math', score: 85 },
//   { id: 2, email: 'student1@example.com', subject: 'Science', score: 78 },
//   { id: 3, email: 'student2@example.com', subject: 'English', score: 92 },
//   { id: 4, email: 'student2@example.com', subject: 'History', score: 88 },
//   { id: 5, email: 'student1@example.com', subject: 'Computer', score: 90 },
// ];

// const StudentDashboard = () => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const studentEmail = user?.email;

//   const studentResults = allResults.filter((result) => result.email === studentEmail);

//   return (
//     <div className="dashboard">
//       <h2>My Results</h2>
//       {studentResults.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Subject</th>
//               <th>Score</th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentResults.map((result) => (
//               <tr key={result.id}>
//                 <td>{result.subject}</td>
//                 <td>{result.score}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No results found for your account.</p>
//       )}
//     </div>
//   );
// };

// export default results;

import React from 'react';
import './Results.css';

const results = [
  { id: 1, student: 'student1@example.com', subject: 'Math', score: 85 },
  { id: 2, student: 'student1@example.com', subject: 'Science', score: 78 },
  { id: 3, student: 'student2@example.com', subject: 'English', score: 92 },
  { id: 4, student: 'student2@example.com', subject: 'History', score: 88 },
  { id: 5, student: 'student3@example.com', subject: 'Computer Science', score: 90 },
];

const Results = () => {
  return (
    <div className="page-content">
      <h2>All Student Results</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Email</th>
            <th>Subject</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={result.id}>
              <td>{index + 1}</td>
              <td>{result.student}</td>
              <td>{result.subject}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
