import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import * as colors from 'material-ui/styles/colors';
import '../App.css';

import ResumePage from '../components/material/ResumePage'
import { ResumeSkills } from '../components/material/ResumePage'
import Education from '../components/material/Education'
import Portfolio from '../components/material/Portfolio'

storiesOf('resume', module)

  .add('resume page', () => {

    return (
      <MuiThemeProvider>
        <ResumePage />
      </MuiThemeProvider>
    )
  })


  .add('education card', () => {

    return (
      <MuiThemeProvider>
        <Education/>
      </MuiThemeProvider>
    )
  })  

  .add('work portfolio cards', () => {
    return (
      <MuiThemeProvider> 
        <Portfolio/>
      </MuiThemeProvider>
    )
  })

  .add('top skills', () => {
    return (
      <MuiThemeProvider> 
        <ResumeSkills/>
      </MuiThemeProvider>
    )
  })
