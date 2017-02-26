import React from 'react'
import Experiences from './Experiences'
import * as colors from 'material-ui/styles/colors'

let descriptions = ['Manage project. Make short term projections based on teammates’ strength and weaknesses ',
  'Led the design of an autonomous robot that navigates through a field of obstacles to the destination. The goal of the robot is to collect a given ,colored block and bring it to a drop zone with the help of various sensors.',
  'Design and implement functionalities related to sensory and navigation.']


let createSkillSet= (lbl, color) => {
  return {
    label: lbl,
    color : color
  }
}

const content = {
  companyName: 'MTC',
  timeRange: 'May 16 - Sep 18',
  role: 'Software Engineer Intern2',
  description: descriptions, 
  skills : [
    createSkillSet('Android', colors.lightGreen100),
    createSkillSet('IOS', colors.lightGreen100),
    createSkillSet('Javascript', colors.deepOrange300),
    createSkillSet('Nodejs', colors.green300),
  ]
}


class ResumePage extends React.Component {
  render() {
    return (
      <div>
        <p className='resume-section-header'>{'Experiences'}</p>  
        {/**/}
        {[0, 1, 2, 3].map(
          (v) => {
            return (
              <Experiences
                className='experience-block'
                content={content}
                >
                <ul style={{ fontSize: '12px' }}>
                  {descriptions.map((v, i) => (<ol key={i} >{v}</ol>))}
                </ul>
              
              </Experiences>
            )
          }
        )}
      </div>
    )
  }
}



export default ResumePage