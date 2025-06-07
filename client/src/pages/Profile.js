import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { id } = useParams(); // profile user ID
  const currentUserId = localStorage.getItem('userId');
  const isOwnProfile = id === currentUserId;

  const [profile, setProfile] = useState({
    name: '',
    address: '',
    bio: '',
    profilePhoto: '/default-photo.png',
    stars: 4
  });

  useEffect(() => {
    // TODO: Replace with actual API call
    // axios.get(`/api/users/${id}`).then(res => setProfile(res.data));
  }, [id]);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="dropdown-wrapper">
          <img src={profile.profilePhoto} alt="Profile" className="profile-pic" />
          {isOwnProfile && (
            <div className="dropdown">
              <button className="dropbtn">⋮</button>
              <div className="dropdown-content">
                <a href="/change-password">Change Password</a>
                <a href="/edit-profile">Edit Details</a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="profile-main">
        <div className="profile-photo-box">
          <img src={profile.profilePhoto} alt="Profile" className="profile-photo" />
          <p>{profile.name}</p>
          <p>{profile.address}</p>
        </div>

        <div className="bio-box">
          <h2>Bio</h2>
          <p>{profile.bio}</p>
        </div>

        <div className="stars-box">
          <h3>Review Stars</h3>
          <p>{'★'.repeat(profile.stars)}{'☆'.repeat(5 - profile.stars)}</p>
        </div>

        {isOwnProfile && (
          <button className="signout-btn" onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            window.location.href = '/login';
          }}>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
