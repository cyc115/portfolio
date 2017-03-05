import React from 'react'
import HoverablePaper from './HoverablePaper'
import McGillLogo from '../../../public/img/McGill.png'
import './Education.css'

class Experiences extends React.Component {

  render() {
    return (
      <HoverablePaper
        className='edu-main'
        paperStyle={{
          padding: '30px',
//          height: '230px'
        }}
      >

        <div className='edu-left-text-col'>

          <p className='edu-title'>Bachelor of Engineering in Software</p>

          <address className='edu-address'>
            McGill University <br />
            845 Sherbrooke St W, <br />
            Montreal, QC H3A 0G4, Canada
        </address>

        </div>

        <div className='edu-right-col'>
          <img src={McGillLogo} alt="McGill university"/>
        </div>

      </HoverablePaper>
    )
  }
}

export default Experiences