import React from 'react'

import Experiences from './Experiences'
import SideBlock from './SideBlock'
import UnderConstruction from './UnderConstruction'
import HoverablePaper from './HoverablePaper'
import Footer from '../Footer'
import { experiences } from '../../constants/PageConstants'
import SkillTags, { createSkillSet } from './SkillTags'
import Education from './Education'
import './ResumePage.css'


class ResumePage extends React.Component {
  render() {
    return (
      <div>

        {/* background */}

        <section>

          <p className='resume-section-header'>{'Background'}</p>

          <div className='resume-flex-container'>

            <div className='resume-left-pane'>
              <Education />
              {/*<RelevantCourses />*/}
            </div>

            <div className='resume-right-pane'>
              <LanguageSection />
            </div>

          </div>

        </section>

        {/* Experience */}

        <section>
          <p className='resume-section-header'>{'Experiences'}</p>
          {/*float right pane*/}

          <div className='resume-flex-container'>



            <div className='resume-left-pane'>
              {
                experiences.map((exp, idx) => {

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
                      content={content} key={idx}
                    />
                  )
                })
              }
            </div>

            <div className='resume-right-pane r-r-p'>
              <ResumeSkills />
              <AdditionalSkills />
              <ContactMeResumeSection />
              <UnderConstruction />
            </div>

          </div>

        </section>
      </div>
    )
  }
}

export const RelevantCourses = (props) => {
  return (
    <HoverablePaper
      paperStyle={{
        padding: '10px',
      }}
    >
      <p className='edu-title'>Relevant courses:</p>

      <SkillTags skills={[
        createSkillSet('Software Architecture'),
        createSkillSet('Startup Engineering'),
        createSkillSet('Artificial Intelligence'),
        createSkillSet('Database Systems'),
        createSkillSet('Software Engineering Practices'),
        createSkillSet('Software Validation'),
        createSkillSet('Algorithm Design'),
      ]} />
    </HoverablePaper>
  )
}

export const LanguageSection = (props) => {
  return (
    <SideBlock className='edu-lang' paperStyle={{ Background: 'grey' }}>
      <p className='resume-skills-header'>
        <i className='fa fa-language' />
        {' LANGUAGES'}
      </p>
      <div className='large-bold'>
        <p>ENGLISH</p>
        <p>FRENCH</p>
        <p>MANDARIN</p>
      </div>
    </SideBlock>
  )
}

/**
 * no hussle generate the stars of the skill list  
 */
function generateStars(str) {
  let full = Array.apply(null, { length: str }).map(
    (v, idx) => <i className='fa fa-star' key={idx} />
  )
  let empty = Array.apply(null, { length: 5 - str }).map(
    (v, idx) => <i className='fa fa-star-o' key={-idx - 1} />
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
