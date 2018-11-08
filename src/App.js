// @flow

import * as React from 'react';

import Header from './components/Header';
import Bio from './components/Bio';

import './App.css';

type PropsType = {||};

class App extends React.Component<PropsType> {

  render() {
    return (
      <div className="App">
          <Header />
          <Bio />
      </div>
    );
  }
}

export default App;
