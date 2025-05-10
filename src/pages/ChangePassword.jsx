import React, { useState, useEffect } from 'react';
import './ChangePassword.css';

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const registered = JSON.parse(localStorage.getItem('registeredUser'));

    if (user && registered) {
      setEmail(user.email);
      setName(user.email.includes('admin') ? 'Admin User' : 'Student User'); // dummy name
    }
  }, []);

  const handleChangePassword = (e) => {
    e.preventDefault();

    const registered = JSON.parse(localStorage.getItem('registeredUser'));

    if (!registered || registered.email !== email) {
      alert('User not found!');
      return;
    }

    if (currentPassword !== registered.password) {
      alert('Current password is incorrect');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    // Save new password
    localStorage.setItem('registeredUser', JSON.stringify({ ...registered, password: newPassword }));
    alert('Password changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Name:</strong> {name}</p>

      <form onSubmit={handleChangePassword}>
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
