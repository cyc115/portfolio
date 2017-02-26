import React from 'react'
import Paper from 'material-ui/Paper'

class HoverablePaper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zDepth: 1
    }

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter() {
    this.setState({
      zDepth: 3,
    })
  }

  onMouseLeave() {
    this.setState({
      zDepth: 1,
    })
  }


  render() {
    return (<Paper
      style={this.props.paperStyle}
      zDepth={this.state.zDepth}
      onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave}
      onTouchStart={this.onMouseEnter}
      onTouchEnd={this.onMouseLeave}
      className={`hoverable-paper ${this.props.className}`}
    >
    {this.props.children}
    </Paper>)
  }

}


export default HoverablePaper