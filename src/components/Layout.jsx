import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Topbar />
      <div className="main">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;