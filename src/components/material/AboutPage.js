import React from 'react'
import profImg from '../../../public/img/profile.jpg'
import Markdown from 'react-remarkable'
import './AboutPage.css'

function AboutPage(props) {

  return (
    <div >

      <div className='about-img-div'>
        
        <img src={profImg}
          alt={"profile"}
          className='img-prof-responsive' />

      </div>

      {generateContent()}

    </div>
  )
}

function generateContent() {
  return (
    <div className='about-page-main'>
      <p>Hi, I'm' Mike.</p>
      <Markdown>
        Recently graduated from [McGill University](https://www.mcgill.ca) with a degree of Bachelor of Software Engineering. I am a learner, explorer and an aspiring dancer at heart.
      </Markdown>

      <p>Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those that works hard and plays hard.</p>

      <p>Moved from China to Montreal, Montreal to New York. I am seeking for an exciting opportunity to begin my career in California.</p>

      <Markdown>
        Come and say Hi via the "Contact" tab or on [Facebook](https://www.facebook.com/chen.yuechuan)!
      </Markdown>

    </div>
  )
}

export default AboutPage