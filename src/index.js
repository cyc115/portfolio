import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import getMuiTheme from 'material-ui/styles/getMuiTheme'
//import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

injectTapEventPlugin()

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
