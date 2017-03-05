import React from 'react'
import profImg from '../../../public/img/profile.jpg'
import Markdown from 'react-remarkable'

import MediaQuery from 'react-responsive'

const profImgWideStyle = {
  margin: '0px 50px 0 -10px',
  padding: '50px 0',
}

const profImgStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
}
//when on small display 
const profImgThinStyle = {
}

const contentDivStyle = {
  fontFamily: 'Roboto',
  minHeight: '150px',
  margin: '30px'
}

function AboutPage(props) {

  return (

    <MediaQuery minWidth={1000}>
      {
        (matches) => {
          let imgStyle = matches ?
            { ...profImgStyle, ...profImgWideStyle } :  //more than 1000
            { ...profImgStyle, ...profImgThinStyle }    //less than 1000

          let imgDivStyle = matches ?
            { height: '500px', float: 'left' } : { height: 'auto' }

          const contentStyle = matches ?
            contentDivStyle : { ...contentDivStyle, margin: '0 -25 0 -25' }

          return (
            <div>
              <div style={imgDivStyle}>
                <img src={profImg}
                  style={imgStyle}
                  alt={"profile image"}
                  className='img-prof-responsive' />
              </div>

              {generateContent(contentStyle)}

            </div>
          )

        }
      }
    </MediaQuery>

  )
}

function generateContent(style) {
  return (
    <div className='about-page-main' style={style}>
      <p>Hi, I'm' Mike.</p>
      <Markdown>
        Recently graduated from [McGill University](https://www.mcgill.ca) with a degree of Bachelor of Software Engineering. I am a learner, explorer and an aspiring dancer at heart.
      </Markdown>


      <p>Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those that works hard and plays hard.</p>

      <p>
        Moved from China to Montreal, Montreal to New York. I am seeking for an exciting opportunity to begin my career in California.
        </p>

      <p>
        <Markdown>
          Come and say Hi via the "Contact" tab or on [Facebook](https://www.facebook.com/chen.yuechuan)!
          </Markdown>
      </p>
    </div>
  )
}

export default AboutPage