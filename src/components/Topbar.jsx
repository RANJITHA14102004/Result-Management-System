// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Topbar.css';

// const Topbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate('/');
//   };

//   return (
//     <div className="topbar">
//       <h1>Result Management System</h1>
//       <button onClick={handleLogout} className="logout-button">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Topbar;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1>Result Management System</h1>
      </div>
      <div className="topbar-right">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;