import React from 'react'
import Experiences from './Experiences'

const descriptions = ['Manage project. Make short term projections based on teammates’ strength and weaknesses ',
  'Led the design of an autonomous robot that navigates through a field of obstacles to the destination. The goal of the robot is to collect a given ,colored block and bring it to a drop zone with the help of various sensors.',
  'Design and implement functionalities related to sensory and navigation.']

let paperStyle = {
//  width: '30em',
//  backgroundColor: 'pink',
  margin: '16px 16px 0 auto',

}


class ResumePage extends React.Component {
  render() {
    return (
      <div>
        {[0, 1, 2, 3].map(
          (v) => {
            return (
              <Experiences styles={{ paper: paperStyle }} focused={3} unfocused={1}>
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