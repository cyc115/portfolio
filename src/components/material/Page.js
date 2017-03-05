import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
  width: 'auto',
  padding: 50,
  margin: 10,
  textAlign: 'center',
  display: 'block'
}
/**
 * attributes :
 * {styles} : additional style used on <Paper>
 */
class Page extends React.Component {

  render() {
    
    let additionalStyles = this.props.styles || {}

    return (
      <Paper style={{...style, ...additionalStyles}} zDepth={1}>
        {this.props.children}
      </Paper>
    )
  }
}

export default Page