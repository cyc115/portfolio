import React from 'react'
import Paper from 'material-ui/Paper'
import '../../App.css'

class Experiences extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    const {
      focused,
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
        width: '800px',
        display: 'flex',
        padding : '24px',
        ...styles.paper
      }}
        zDepth={focused}
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
          margin :'0 0 0 0'
        }}>
          {/*role */}
          <h2 style={{
            fontSize: '1em',
            //textAlign : 'left',
            position : 'relative',
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