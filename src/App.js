import React, { Component } from 'react';
import TabsContainer from './components/material/Tabs'
import Footer from './components/Footer'

import './App.css';


const appStyle = {
  maxWidth: '1100px',
  textAlign: 'center',
  margin: 'auto'
}

const footerStyle = {
  position: 'fixed',
  top: '90%',
  left: '46%',
  margin: '15px',
}

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <h1 className='name-title'>Mike Chen</h1>
        <TabsContainer />
        <Footer style={footerStyle} />
      </div>
    );
  }
}

export default App;
