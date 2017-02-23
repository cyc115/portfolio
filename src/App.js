import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin'
import * as K from './constants/PageConstants'
import TabsContainer from './components/material/Tabs'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='name-title'>Mike Chen</h1>
        <TabsContainer />
        <p >This is a web page</p>
      </div>
    );
  }
}

export default App;
