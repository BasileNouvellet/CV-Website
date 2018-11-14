// @flow

import * as React from 'react';

import Header from './components/Header';
import Bio from './components/Bio';
import SectionTimeline from './components/SectionTimeline';

import experiences from './data/experiences.json';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />

        <Bio />

        <SectionTimeline
          title="Experiences"
          colors={{
            main: '#009688',
            second: '#80CBC4',
          }}
          items={experiences.items}
        />
      </div>
    </div>
  );
}

export default App;
