// @flow

import * as React from 'react';

import Header from './components/Header';
import Bio from './components/Bio';
import SectionTimeline from './components/SectionTimeline';

import EXPERIENCES from './data/experiences.json';
import EDUCATION from './data/education.json';

import './App.css';

const THEME = {
  experiences: {
    main: '#009688',
    second: '#80CBC4',
  },
  education: {
    main: '#961818',
    second: '#cb4640',
  },
};

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />

        <Bio />

        <SectionTimeline
          title="Experiences"
          items={EXPERIENCES.items}
          colors={THEME.experiences}
        />

        <SectionTimeline
          title="Education"
          items={EDUCATION.items}
          colors={THEME.education}
        />
      </div>
    </div>
  );
}

export default App;
