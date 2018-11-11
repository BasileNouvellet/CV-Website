// @flow

import * as React from 'react';

import ProfilePicture from './subComponents/ProfilePicture';
import SocialBar from './subComponents/SocialBar';
import BioButtonsBar from './subComponents/BioButtonsBar';
import BioText from './subComponents/BioText';

import './Bio.css';

function Bio() {
  return (
    <div className="bio-container">
      <ProfilePicture />
      <SocialBar />
      <BioText />
      <BioButtonsBar />
    </div>
  );
}

export default Bio;
