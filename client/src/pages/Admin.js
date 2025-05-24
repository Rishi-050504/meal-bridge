import React from 'react';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-left">
        <h2 className="admin-title">Admin Team</h2>
        <div className="admin-image-grid">
          <div className="admin-profile">
            <div className="image-circle" />
            <p className="profile-text">Ananya Sharma<br /><small>XYZ College</small></p>
          </div>
          <div className="admin-profile">
            <div className="image-circle" />
            <p className="profile-text">Rahul Verma<br /><small>ABC University</small></p>
          </div>
        </div>
        <p className="image-note">Images from Freepik</p>
        <button className="learn-more-btn">Learn More</button>
      </div>

      <div className="admin-right">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Enter your address" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
