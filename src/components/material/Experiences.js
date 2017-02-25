import React from 'react'
import Paper from 'material-ui/Paper'
import '../../App.css'

class Experiences extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      zDepth: 1,
    }

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  

  }


  onMouseEnter() {
      this.setState({
        zDepth: this.props.focused,
      })
  }

  onMouseLeave() {
      this.setState({
        zDepth: this.props.unfocused,
      })
  }
  render() {
    const {
      focused = 3,
      unfocused = 1,
      styles = {
        paper: {},
        role: {},
        companyName: {},
        timeRange: {},
        description: {}
      },
      content = {
        companyName: 'PTC',
        timeRange: 'May 16 - Sep 16',
        role: 'Software Engineer Intern',
      }} = this.props

    return (
      <Paper style={{
        //        width: '800px',
        display: 'flex',
        padding: '24px',
        ...styles.paper
      }}
        zDepth={this.state.zDepth}
        //onMouseOver={this.onMouseOver(300)}
        //onTouchTap={this.onMouseOver(500)}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div style={{
          width: '30%',
        }}>
          {/*company*/}
          <h1 style={{
            fontSize: '1em',
            ...styles.companyName
          }}>
            {content.companyName}
          </h1>

          {/*spent time*/}
          <p style={{
            ...styles.timeRange
          }}>{content.timeRange}</p>

        </div>

        <div style={{
          width: '70%',
          margin: '0 0 0 0'
        }}>
          {/*role */}
          <h2 style={{
            fontSize: '1em',
            //textAlign : 'left',
            position: 'relative',
            ...styles.role
          }}>
            {content.role}
          </h2>
          {this.props.children}

        </div>
      </Paper>
    )
  }
}

export default Experiences