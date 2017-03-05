import React from 'react'
import {CardMedia, CardTitle, CardText} from 'material-ui/Card'
import HoverablePaper from './HoverablePaper'
import FlatButton from 'material-ui/FlatButton'
import './portfolio.css'
import { portfolio } from '../../constants/PageConstants'
import placeHolder from '../../../public/img/placeholder.png'

class Portfolio extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      i1: 0
    }
    this.flip = this.flip.bind(this)
    this.toggleBack = this.toggleBack.bind(this)
    this.toggleFront = this.toggleFront.bind(this)
  }


  flip() {
    this.setState({ i1: (this.state.i1 === 0 ? 1 : 0) })
  }

  toggleBack() {
    this.setState({ i1: 1 })
  }

  toggleFront() {
    this.setState({ i1: 0 })
  }

  render() {
    return (
      <div
        onMouseEnter={this.toggleBack}
        onMouseLeave={this.toggleFront}
        onTouchStart={this.toggleBack}
        onTouchEnd={this.toggleFront}
      >

        {generateShowCase()}
      </div>
    )
  }
}



function generateShowCase() {
  return (
    <div className='show-case-container'>
      {portfolio.map((v,idx) => {
        return <ShowCase
          key={idx}  
          src={v.imgSrc || placeHolder}
          title={v.title}
          description={v.description}
          linkText={v.linkText}
          link={v.link}
          style={{
            marginRight: '30px',
          }}
        />
      })}
    </div>
  )
}

const ShowCase = ({ src, title, description, linkText, link, index }) => {
  return (
    <HoverablePaper className='port-showcase-card'>
      <CardMedia
        overlay={<CardTitle title={title}></CardTitle>}>
        <img src={src} alt={title} />
      </CardMedia>
      <CardText>{description}</CardText>
      <FlatButton label='GITHUB' href={link} target='_blank' />
    </HoverablePaper>
  )
}

export default Portfolio
