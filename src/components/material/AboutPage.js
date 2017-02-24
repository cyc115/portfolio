import React from 'react'
import profImg from '../../../public/img/profile.jpg'
import loremIpsum from 'lorem-ipsum'
import MediaQuery from 'react-responsive'

const profImgStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%', 
  margin : '30px'
}


const contentDivStyle = {
  fontFamily : 'Roboto',
  minHeight: '150px',
  margin : '30px'
}

function AboutPage() {

  return (
    <div style={{ display: 'flex' }}>

        <img src= {profImg}
          style={profImgStyle}
          alt={"profile image"}
          className='img-prof-responsive' />      
      
      <div style={contentDivStyle}>
        <p>
        {loremIpsum({count:25})}  
      </p>
      </div>

    </div>
  )
}

export default AboutPage