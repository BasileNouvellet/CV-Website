// @flow

import * as React from 'react';

import Header from './components/Header';
import Bio from './components/Bio';

import './App.less';

class App extends React.Component {

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
