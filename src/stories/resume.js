import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ResumePage from '../components/material/ResumePage'
import Education from '../components/material/Education'


storiesOf('resume', module)

  .add('main', () => {

    return (
      <MuiThemeProvider>
        <ResumePage />
      </MuiThemeProvider>
    )
  })


  .add('experience', () => {

    return (
      <MuiThemeProvider>
        <Education/>
      </MuiThemeProvider>
    )
  })  
