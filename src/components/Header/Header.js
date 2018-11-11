// @flow

import * as React from 'react';

import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="top-header" />
      <div className="bottom-header">
        <div className="name">Basile NOUVELLET</div>
        <div className="subtitle">
          Financial engineering and Computer science Student at Ecole des Ponts ParisTech
        </div>
      </div>
    </div>
  );
}

export default Header;
