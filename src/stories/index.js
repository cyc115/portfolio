import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Experiences from '../components/material/Experiences'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../App.css'

injectTapEventPlugin()
/*
    const {
      styles = {
        paper: {},
        role: {},
        companyName: {},
        timeRange: {},
        description: {}
      },
      content = {
        companyName: 'PTC',
        timeRange: 'May 16 - Sep 16',
        role: 'Software Engineer Intern',
      }} = this.props*/

let descriptions = ['Manage project. Make short term projections based on teammates’ strength and weaknesses ',
  'Led the design of an autonomous robot that navigates through a field of obstacles to the destination. The goal of the robot is to collect a given ,colored block and bring it to a drop zone with the help of various sensors.',
  'Design and implement functionalities related to sensory and navigation.']

storiesOf('Experiences', module)
  .add('focused', () => {

    let paperStyle = {
      width: '30em',
      backgroundColor : 'pink'
    }

    return (
      <MuiThemeProvider>
        <Experiences styles={{ paper: paperStyle }} focused={3}>
          <ul style={{fontSize : '12px'}}>
            {descriptions.map((v, i) => (<ol key={i} >{v}</ol>))}
          </ul>
        </Experiences>
      </MuiThemeProvider>
    )
  })


