import React from 'react'
import Experiences from './Experiences'
import SideBlock from './SideBlock'
import UnderConstruction from './UnderConstruction'
import { experiences, skillColors } from '../../constants/PageConstants'

import * as colors from 'material-ui/styles/colors'

/**
 * create an object containing the skill label and the
 * associated color
 */
let createSkillSet = (lbl, color) => {
  color = skillColors[lbl]

  return {
    label: lbl,
    color: color
  }
}


class ResumePage extends React.Component {
  render() {
    return (
      <div style={{
        //display :'flex'
      }}>
        <p className='resume-section-header'>{'Experiences'}</p>
        {/*float right pane*/}

        <div className='resume-right-pane'>
          <ResumeSkills />
          <UnderConstruction />
        </div>

        <div className='resume-left-pane'>
          {
            experiences.map(exp => {
              //remap experiences to the content 
              let content = {
                companyName: exp.companyName,
                additionLine: exp.fullName, //TODO this line is not currently displayed 
                timeRange: exp.date,
                role: exp.role,
                description: exp.descriptions,
                skills: exp.skills.map(s => createSkillSet(s))
              }

              return (
                <Experiences
                  className='experience-block'
                  content={content} />
              )
            })
          }
        </div>


      </div>
    )
  }
}

/**
 * no hussle generate the stars of the skill list  
 */
function generateStars(str) {
  let full = Array.apply(null, { length: str }).map(
    v => <i className='fa fa-star' />
  )
  let empty = Array.apply(null, { length: 5 - str }).map(
    v => <i className='fa fa-star-o' />
  )
  return full.concat(empty)
}

export const ResumeSkills = (props) => {

  return (
    <SideBlock
      className='resume-skills-block'
    >
      <p className='resume-skills-header'>
        <i className='fa fa-flask' />
        {' MY SKILLS'}
      </p>

      <table className='resume-skill-table'>
        <tbody>
          <tr>
            <th>JAVASCRIPT</th>
            <th>{generateStars(4)}</th>
          </tr>
          <tr>
            <th>REACT</th>
            <th>{generateStars(4)}</th>
          </tr>
          <tr>
            <th>NODEJS</th>
            <th>{generateStars(3)}</th>
          </tr>
          <tr>
            <th>JAVA</th>
            <th>{generateStars(4)}</th>
          </tr>
          <tr>
            <th>ANDROID</th>
            <th>{generateStars(3)}</th>
          </tr>
        </tbody>
      </table>

    </SideBlock>
  )
}

export default ResumePage
