// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import StudentDashboard from './pages/StudentDashboard';
// import Topbar from './components/Topbar';
// import Sidebar from './components/Sidebar';
// import PrivateRoute from './components/PrivateRoute';
// import AdminDashboard from './pages/AdminDashboard'; 
// import AdminSidebar from './components/AdminSidebar';


// import './App.css';


// function App() {
//   const user = JSON.parse(localStorage.getItem('user'));

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <div className="app">
//                 <Topbar />
//                 <div className="main">
//                   <Sidebar />
//                   <StudentDashboard role="student" />
//                 </div>
//               </div>
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/admin-dashboard"
//           element={
//             <PrivateRoute>
//               <div className="app">
//                 <Topbar />
//                 <div className="main">
//                   <Sidebar /> {/* same sidebar */}
//                   <AdminDashboard role="admin" /> {/* reuse dashboard */}
//                 </div>
//               </div>
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }


// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Classes from './pages/Classes';
import Subjects from './pages/Subjects';
import Results from './pages/Results';
import ChangePassword from './pages/ChangePassword';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <div className="app">
                <Topbar />
                <div className="main">
                  <Sidebar />
                  <StudentDashboard />
                </div>
              </div>
            </PrivateRoute>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <div className="app">
                <Topbar />
                <div className="main">
                  <Sidebar />
                  <AdminDashboard />
                </div>
              </div>
            </PrivateRoute>
          }
        />

        {/* Admin Dummy Pages */}
        <Route
          path="/admin/classes"
          element={
            <PrivateRoute>
              <div className="app">
                <Topbar />
                <div className="main">
                  <Sidebar />
                  <Classes />
                </div>
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/subjects"
          element={
            <PrivateRoute>
              <div className="app">
                <Topbar />
                <div className="main">
                  <Sidebar />
                  <Subjects />
                </div>
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/results"
          element={
            <PrivateRoute>
              <div className="app">
                <Topbar />
                <div className="main">
                  <Sidebar />
                  <Results />
                </div>
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/change-password"
          element={
            <PrivateRoute>
              <div className="app">
                <Topbar />
                <div className="main">
                  <Sidebar />
                  <ChangePassword />
                </div>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
