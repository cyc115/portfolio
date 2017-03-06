import React from 'react'
import Paper from 'material-ui/Paper'

/**
 * attributes :
 * {styles} : additional style used on <Paper>
 */
class Page extends React.Component {

  render() {
    
    let additionalStyles = this.props.styles || {}

    return (
      <Paper style={additionalStyles} zDepth={1} className='paper'>
        {this.props.children}
      </Paper>
    )
  }
}

export default Page