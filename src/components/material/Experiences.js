import React from 'react'
import Paper from 'material-ui/Paper'
import styles from '../../App.css'

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
        timeRange: 'May 16 - Sep 17',
        role: 'Software Engineer Intern',
        description: ['l1', '2', 'l3']
      }} = this.props

    return (
      <Paper style={styles.paper}
        className='experience-paper'  
        zDepth={this.state.zDepth}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onTouchStart={this.onMouseEnter}
        onTouchEnd={this.onMouseLeave}
      >
        <div
          className='experience-main'
        >
          <div
            className='experience-inner'
          >
            <div
              className='experience-left'
            >
              {/*company name*/}
              <span
                className='experience-company'
                style={styles.companyName}
              >
                {content.companyName}
              </span>

              {/*spent time*/}
              <p className='experience-date' style={styles.timeRange}>
                {content.timeRange}
              </p>

            </div>
            <div className='experience-right'>
              {/*role*/}
              <p style={styles.role} className='experience-title'>
                {content.role}
              </p>
              {/*description*/}
              <ul className='experience-description'>
                {content.description.map((v, i) => {
                  return <li key={i}>{v}</li>
                })}
              </ul>
            </div>
          </div>
        </div>

      </Paper >
    )
  }
}

export default Experiences