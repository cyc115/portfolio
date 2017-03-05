import React from 'react'
import SkillTags from './SkillTags'
import { lightGreen100 } from 'material-ui/styles/colors'
import HoverablePaper from './HoverablePaper'

class Experiences extends React.Component {

  render() {
    const {
      styles = {
        role: {},
        companyName: {},
        timeRange: {},
        description: {}
      },
      content = {
        companyName: 'PTC',
        timeRange: 'May 16 - Sep 17',
        role: 'Software Engineer Intern',
        description: ['l1', '2', 'l3'],
        skills: [{ lbl: 'Android', color: lightGreen100 }],
        additionalLine: 'parametric technology'
      }} = this.props

    return (
      <HoverablePaper 
        className='experience-paper'
      >
        <div 
          className='experience-main'
        >
          <div
            className='experience-inner'
          >
            <div
              className='experience-left'
            >
              {/*company name*/}
              <span
                className='experience-company'
                style={styles.companyName}
              >
                {content.companyName}
              </span>

              <p
                className='experience-additional'
              >
                {content.additionalLine}
              </p>
              {/*spent time*/}
              <p className='experience-date' style={styles.timeRange}>
                {content.timeRange}
              </p>
              {/*skill tags*/}
              <SkillTags skills={content.skills} />

            </div>
            <div className='experience-right'>
              {/*role*/}
              <p style={styles.role} className='experience-title'>
                {content.role}
              </p>
              {/*description*/}
              <ul className='experience-description'>
                {content.description.map((v, i) => {
                  return <li key={i}>{v}</li>
                })}
              </ul>
            </div>
          </div>
        </div>

      </HoverablePaper >
    )
  }
}

export default Experiences