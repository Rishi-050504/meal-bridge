import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const currentUserId = localStorage.getItem('userId');
  const isOwnProfile = id === currentUserId;

  const [profile, setProfile] = useState({
    name: 'Laxmi Sravya Setty',
    age: 22,
    location: 'Hyderabad, India',
    bio: `I am an allround web developer. I love creating user-friendly applications and have a strong passion for frontend development using the MERN stack.`,
    profilePhoto: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
  });

  useEffect(() => {
    // You can fetch real user data here using the id from the URL
  }, [id]);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location.href = '/login';
  };

  return (
    <div className="profile-container">
      <h1>Hello!</h1>
      <p className="subtitle">I'm a creative MERN stack web developer</p>

      <div className="profile-content">
        <div className="profile-left">
          <img src={profile.profilePhoto} alt="Profile" className="profile-image" />
        </div>

        <div className="profile-right">
          <div className="about-me">
            <h2>About me</h2>
            <p>{profile.bio}</p>
          </div>

          <div className="details">
            <h2>Details</h2>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Age:</strong> {profile.age} years</p>
            <p><strong>Location:</strong> {profile.location}</p>
          </div>

         
          {isOwnProfile && (
            <button className="signout-btn" onClick={handleSignOut}>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
