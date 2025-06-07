// src/pages/ChangePassword.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ChangePassword = () => {
  const { id } = useParams();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/users/${id}/change-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ oldPassword, newPassword })
    });

    const data = await res.json();
    if (res.ok) {
      alert('Password changed successfully!');
    } else {
      alert(data.message || 'Failed to change password');
    }
  };

  return (
    <div className="change-password">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
