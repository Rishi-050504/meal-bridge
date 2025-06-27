// // src/pages/EditProfile.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const EditProfile = () => {
//   const { id } = useParams();
//   const [formData, setFormData] = useState({ name: '', address: '', bio: '' });

//   useEffect(() => {
//     fetch(`/api/users/${id}`)
//       .then(res => res.json())
//       .then(data => setFormData({ name: data.name, address: data.address, bio: data.bio }));
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch(`/api/users/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`
//       },
//       body: JSON.stringify(formData)
//     });
//     alert('Profile updated!');
//   };

//   return (
//     <div className="edit-profile">
//       <h2>Edit Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
//         <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
//         <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio" />
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfile.css';

const EditProfile = () => {
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setForm(res.data);
      } catch (err) {
        alert('Failed to load profile');
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:5000/api/auth/me', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Profile updated!');
    } catch (err) {
      alert('Update failed');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="edit-profile-container">
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />
        <label>Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
        <label>Mobile</label>
        <input name="mobile" value={form.mobile} onChange={handleChange} required />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
