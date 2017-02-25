import React from 'react'
import profImg from '../../../public/img/profile.jpg'
import loremIpsum from 'lorem-ipsum'
import MediaQuery from 'react-responsive'

const profImgWideStyle = {
  margin: '0px 50px 0 -10px',
  padding: '50px 0',
  //float: 'left',
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

function AboutPage() {

  return (

    <MediaQuery minWidth={1000}>
      {
        (matches) => {
          let imgStyle = matches ?
            { ...profImgStyle, ...profImgWideStyle } :
            { ...profImgStyle, ...profImgThinStyle }
          
          let imgDivStyle = matches ? 
            { height: '500px', float: 'left' } : {height : 'auto'}

          return (
            <div>
              <div style={imgDivStyle}>
                <img src={profImg}
                  style={imgStyle}
                  alt={"profile image"}
                  className='img-prof-responsive' />
              </div>
              <div style={contentDivStyle}>
                <p>
                  {loremIpsum({ count: 25 })}
                </p>
              </div>
            </div>
          )

        }
      }
    </MediaQuery>

  )
}

export default AboutPage