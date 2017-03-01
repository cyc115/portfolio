/**
 * multi-page vertical material themed flipper.
 *  <Flipper>
 *    <article/>
 *    <article/>
 *  </Flipper>
 */
import React from 'react'
import Paper from 'material-ui/Paper'
import './flipper.css'

class Flipper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {index = 0, className, face, style, paperStyle={}} = this.props

    return (
      <div
        className={'flip-container'}
        style={style}  
      >
        <div className={`flipper ${face ? 'flip1' : 'flip2'}`}>
          <Paper style={paperStyle}>
            {this.props.children[index]}
          </Paper>
        </div>
      </div>
    )
  }
}

export default Flipper