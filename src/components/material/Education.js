import React from 'react'
import Paper from 'material-ui/Paper'
import SkillTags, { createSkillSet } from './SkillTags'
import * as colors from 'material-ui/styles/colors'
import HoverablePaper from './HoverablePaper'
import McGillLogo from '../../../public/img/McGill.png'

class Experiences extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HoverablePaper
        className='experience-paper'
        paperStyle={{
          padding: '30px',
          height: '230px'
        }}
      >
        <div style={{
          display: 'flex',
          
        }}>
          <div style={{ width: '70%' }}>

            <p className='edu-title'>Bachelor of Engineering in Software</p>

            <address className='edu-address'>
              McGill University <br />
              845 Sherbrooke St W, <br />
              Montreal, QC H3A 0G4, Canada
        </address>

          </div>

          <div style={{ float: 'right', marginRight: '0px', width: '30%' }}>
            <img src={McGillLogo} alt="McGill university" height='150px' />
          </div>

        </div>

      </HoverablePaper>
    )
  }
}

export default Experiences