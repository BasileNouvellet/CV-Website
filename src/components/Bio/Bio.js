// @flow

import * as React from 'react';

import BioButtonsBar from './subComponents/BioButtonsBar';
import BioText from './subComponents/BioText';

import './Bio.css';

function Bio() {
  return (
    <div className="bio-container">
      This is Bio

      <BioText />
      <BioButtonsBar />
    </div>
  );
}

export default Bio;
