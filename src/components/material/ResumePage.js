import React from 'react'
import Experiences from './Experiences'
import SideBlock from './SideBlock'
import UnderConstruction from './UnderConstruction'
import Footer from '../Footer'
import { experiences, skillColors } from '../../constants/PageConstants'
import SkillTags from './SkillTags'
import Education from './Education'

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
      <div>
        <section>
          <p className='resume-section-header'>{'Background'}</p>

          <div className='resume-right'>
            <LanguageSection />
          </div>

          <div className='resume-left'>
            <Education />
          </div>

        </section>

        <section>
          <p className='resume-section-header'>{'Experiences'}</p>
          {/*float right pane*/}

          <div className='resume-right-pane'>
            <ResumeSkills />
            <AdditionalSkills />
            <ContactMeResumeSection />
            <UnderConstruction />
          </div>

          <div className='resume-left-pane'>
            {
              experiences.map(exp => {
                //remap experiences to the content 
                let content = {
                  companyName: exp.companyName,
                  additionalLine: exp.fullName,
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


        </section>
      </div>
    )
  }
}

export const LanguageSection = (props) => {
  return (
    <SideBlock className='edu-lang' paperStyle={{Background : 'grey'}}>
      <p className='resume-skills-header'>
        <i className='fa fa-language' />
        {' LANGUAGES'}
      </p>
      <div className='large-bold'>
        <p>English</p>
        <p>French</p>
        <p>Mandarin</p>
      </div>
    </SideBlock>
  )
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
            <th>JAVA</th>
            <th>{generateStars(4)}</th>
          </tr>
          <tr>
            <th>NODEJS</th>
            <th>{generateStars(3)}</th>
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

export const AdditionalSkills = () => {
  let skills = [
    createSkillSet('PHP'),
    createSkillSet('Linux'),
    createSkillSet('bash'),
    createSkillSet('C#'),
    createSkillSet('IOS'),
    createSkillSet('MySQL'),
    createSkillSet('Git'),
    createSkillSet('Object Oriented Design principles'),
  ]

  return (
    <SideBlock>
      <p className='resume-skills-header'>
        <i className='fa fa-cogs' />
        {' ADDITIONAL SKILLS'}
      </p>

      <SkillTags skills={skills} className='resume-additional-skills' />

    </SideBlock>
  )
}

export const ContactMeResumeSection = () => {
  let mailTo = () => {
    window.open("mailto:yuechuan20@gmail.com", '_blank')
  }
  return (
    <SideBlock>
      <p className='resume-skills-header'>
        <i className='fa fa-id-card' />
        {' CONTACT ME'}
      </p>

      <div className='resume-contact-info'>
        <p>+1 646 578 1409</p>
        <p onClick={mailTo}>yuechuan20@gmail.com</p>
        <div style={{ width: '100%' }}>
          <Footer iconS={{
            color: 'white',
            margin: '5px'
          }} />
        </div>
      </div>
    </SideBlock>
  )
}

export default ResumePage
