// @flow

import * as React from 'react';

import './ProfilePicture.css';
import profilePic from './assets/PhotoCV.jpg';

function ProfilePicture() {
  return (
    <div id="ProfilePicture">
      <img src={profilePic} alt="profile" className="img" />
    </div>
  );
}

export default ProfilePicture;
