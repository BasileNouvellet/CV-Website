// @flow

import * as React from 'react';

import Header from './components/Header';
import Bio from './components/Bio';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Bio />
      </div>
    </div>
  );
}

export default App;
