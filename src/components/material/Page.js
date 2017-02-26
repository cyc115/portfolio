import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
  width: 'auto',
  padding: 50,
  margin: 10,
  textAlign: 'center',
  display: 'block'
}

class Page extends React.Component {

  render() {
    const {children} = this.props.children
    let additionalStyles = this.props.styles || {}
    return (
      <Paper style={{...style}} zDepth={1}>
        {this.props.children}
      </Paper>
    )
  }
}

export default Page