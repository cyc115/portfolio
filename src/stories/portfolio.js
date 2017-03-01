import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../App.css'

import * as colors from 'material-ui/styles/colors'

import Portfolio from '../components/material/Portfolio'

storiesOf('Portfolio', module)

  .add('main', () => {

    return (
      <MuiThemeProvider> 
        <Portfolio/>
      </MuiThemeProvider>
    )
  })  
