// src/pages/EditProfile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditProfile = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', address: '', bio: '' });

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then(res => res.json())
      .then(data => setFormData({ name: data.name, address: data.address, bio: data.bio }));
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(formData)
    });
    alert('Profile updated!');
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
