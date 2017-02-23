
import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'

class TabsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }

    this.styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
      slide: {
        padding: 10,
      }
    }

    this.tabLabels = [
      'ABOUT',
      'PORTFOLIO',
      'RESUME',
      'INTEREST',
      'CONTACT'
    ]
  }

  handleChange = (v) => {
    this.setState({
      ...this.state,
      slideIndex: v
    })
    console.dir(`changed idx to : ${this.state.slideIndex}` );
  }

  genTabs = (labels) => {
    return (labels.map( (v, i) => <Tab label={v} value={i}/>))
  }

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex} >
          {this.genTabs(this.tabLabels)}
        </Tabs>

        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange} >
          <div style={{...this.styles.slide }}>
            <h2>UNDER CONSTRUCTION</h2>
          </div>
          <div style={{...this.styles.slide }}>
            <h2>UNDER CONSTRUCTION</h2>
          </div>
          <div>
            <h2>slide1</h2>
          </div>
          <div>
            <h2>slide2</h2>
          </div>
          <div>
            <h2>slide1</h2>
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

export default TabsContainer