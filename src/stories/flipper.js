import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as colors from 'material-ui/styles/colors'

import Flipper from '../components/material/flipper/Flipper'
let idx = 0

function toggle(e) {
  if (idx === 0) {
    idx = 1
  }
  else {
    idx = 0
  }
}

toggle = toggle.bind(this)

storiesOf('Portfolio', module)

  .add('main', () => {
    return (
      <MuiThemeProvider>
        <Flipper>
          <h1> hello </h1>
        </Flipper>
      </MuiThemeProvider>
    )
  })  
