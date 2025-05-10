// import React from 'react';

// const AdminSidebar = () => {
//   return (
//     <div style={{ width: '200px', background: '#eee', padding: '1rem' }}>
//       <h3>Admin Menu</h3>
//       <ul>
//         <li>Manage Classes</li>
//         <li>Manage Subjects</li>
//         <li>Results</li>
//         <li>Change Password</li>
//       </ul>
//     </div>
//   );
// };

// export default AdminSidebar;


import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/subjects">Subjects</Link></li>
        <li><Link to="/results">Results</Link></li>
        <li><Link to="/change-password">Change Password</Link></li>
      </ul>
    </div>
  );
};
