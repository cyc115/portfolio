import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Experiences from '../components/material/Experiences'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../App.css'

import SkillTags from '../components/material/SkillTags'
import HoverablePaper from '../components/material/HoverablePaper'
import SideBlock from '../components/material/SideBlock'
import {ResumeSkills} from '../components/material/ResumePage'

import * as colors from 'material-ui/styles/colors'

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


let createSkillSet = (lbl, color) => {
  return {
    label: lbl,
    color: color
  }
}

let skills = [
  createSkillSet('Android', colors.lightGreen100),
  createSkillSet('React', colors.lightBlue100),
  createSkillSet('Android2', colors.lightPink100),
  createSkillSet('Android3', colors.lightBlue300),
]

const content = {
  companyName: 'MTC',
  timeRange: 'May 16 - Sep 18',
  role: 'Software Engineer Intern2',
  description: descriptions,
  skills: skills
}


storiesOf('Experiences', module)
  .add('skill block', () => {

    return (
      <MuiThemeProvider>
        <ResumeSkills/>
      </MuiThemeProvider>
    )
  }) 
  .add('sidebox', () => {

    return (
      <MuiThemeProvider>
        <SideBlock
          paperStyle={{
            background: colors.blueGrey500,
            height: '500px'
          }}
        >
          <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </SideBlock>
      </MuiThemeProvider>
    )
  })  

  .add('focused', () => {

    return (
      <MuiThemeProvider>
        <Experiences  
          content={content}>
        </Experiences>
      </MuiThemeProvider>
    )
  })

  .add('skill Tags', () => {

    return (
      <MuiThemeProvider>
        <SkillTags skills={skills} />
      </MuiThemeProvider>
    )
  })

  .add('Hoverable paper', () => {

    return (
      <MuiThemeProvider>
        <HoverablePaper
          className='experience-paper'
          style={{}}
        >
          <p>hello world </p>
        </HoverablePaper>
          
      </MuiThemeProvider>
    )
  })


  .add('skills', () => {

    return (
      <MuiThemeProvider>
        <HoverablePaper
          className='experience-paper'
          style={{}}
        >
          <p>hello world </p>
        </HoverablePaper>
          
      </MuiThemeProvider>
    )
  })



