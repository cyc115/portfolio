/**
 * multi-page vertical material themed flipper.
 *  <Flipper>
 *    <article/>
 *    <article/>
 *  </Flipper>
 **/
import React from 'react'
import './flipper.css'

class Flipper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {index = 0, className='', face = false, style} = this.props

    return (
      <div
        className={'flip-container ' + className}
        style={style}  
      >
        <div className={`flipper ${face ? 'flip1' : 'flip2'}`}>
          {this.props.children[index]}
        </div>
      </div>
    )
  }
}

export default Flipper