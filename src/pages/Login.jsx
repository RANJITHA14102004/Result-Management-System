// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [activeTab, setActiveTab] = useState('student');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleStudentLogin = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

//     if (
//       storedUser &&
//       storedUser.email === email &&
//       storedUser.password === password
//     ) {
//       localStorage.setItem('user', JSON.stringify({ email, role: 'student' }));
//       navigate('/dashboard');
//     } else {
//       alert('Invalid student credentials');
//     }
//   };

//   const handleAdminLogin = (e) => {
//     e.preventDefault();

//     if (email === 'admin@example.com' && password === 'admin123') {
//       localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
//       navigate('/admin-dashboard');
//     } else {
//       alert('Invalid admin credentials');
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-card">
//         <div className="tab-selector">
//           <button
//             className={activeTab === 'student' ? 'active' : ''}
//             onClick={() => setActiveTab('student')}
//           >
//             Student Login
//           </button>
//           <button
//             className={activeTab === 'admin' ? 'active' : ''}
//             onClick={() => setActiveTab('admin')}
//           >
//             Admin Login
//           </button>
//         </div>

//         {activeTab === 'student' && (
//           <>
//             <h2>Student Login</h2>
//             <form onSubmit={handleStudentLogin}>
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button type="submit">Login</button>
//               <p>
//                 Don't have an account? <Link to="/register">Register</Link>
//               </p>
//             </form>
//           </>
//         )}

//         {activeTab === 'admin' && (
//           <>
//             <h2>Admin Login</h2>
//             <form onSubmit={handleAdminLogin}>
//               <input
//                 type="email"
//                 placeholder="Admin email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Admin password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button type="submit">Login</button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleStudentLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem('user', JSON.stringify({ email, role: 'student' }));
      navigate('/dashboard');
    } else {
      alert('Invalid student credentials');
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
      navigate('/admin-dashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="tab-selector">
          <button
            className={activeTab === 'student' ? 'active' : ''}
            onClick={() => setActiveTab('student')}
          >
            Student Login
          </button>
          <button
            className={activeTab === 'admin' ? 'active' : ''}
            onClick={() => setActiveTab('admin')}
          >
            Admin Login
          </button>
        </div>

        {activeTab === 'student' && (
          <form onSubmit={handleStudentLogin}>
            <h2>Student Login</h2>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        )}

        {activeTab === 'admin' && (
          <form onSubmit={handleAdminLogin}>
            <h2>Admin Login</h2>
            <input
              type="email"
              placeholder="Admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
