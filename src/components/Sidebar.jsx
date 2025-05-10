import React from 'react';
import './Sidebar.css';

// const Sidebar = () => (
//   <div className="sidebar">
//     <h2>Menu</h2>
//     <ul>
//       <li>Dashboard</li>
//       <li>Results</li>
//     </ul>
//   </div>
// );

// export default Sidebar;

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/admin-dashboard">Dashboard</Link></li>
        <li><Link to="/admin/classes">Classes</Link></li>
        <li><Link to="/admin/subjects">Subjects</Link></li>
        <li><Link to="/admin/results">Results</Link></li>
        <li><Link to="/admin/change-password">Change Password</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

