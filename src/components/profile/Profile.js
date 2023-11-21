import React from 'react';
import './Profile.css';

const Profile = () => {
    const profileData = {
        username: 'Jatin Rana',
        bannerImageUrl: process.env.PUBLIC_URL + './assets/daylight_BAck.jpg',
        userImageUrl: process.env.PUBLIC_URL + './assets/photo_profile2.jpg',
       
      };
  return (
    <div className="profile-container">
      <div className="banner" style={{ backgroundImage: `url(${profileData.bannerImageUrl})` }}></div>
      <div className="profile-info">
        <div className="user-section">
        <img className="user-image" src={profileData.userImageUrl} alt="User" />
          <div className="user-details">
            <h2 className="username">{profileData.username}</h2>
            <div className = "btn">
            <div className="user-buttons">
            <button className="follow-button">1346</button>
            <p className="follow-info">Followers</p>
            </div>
            <div className='user-buttons'>
              <button className="follow-button">142</button>
              <p className="follow-info">Followers</p>
            </div>
            </div>
          </div>
        </div>
        <div className='ceo'>
            <p className = 'ceo-p'>Computer Science and Engineering Student</p>
            <a href="https://www.linkedin.com/in/jatinrana86/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            https://www.linkedin.com/in/jatinrana86/
            </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;