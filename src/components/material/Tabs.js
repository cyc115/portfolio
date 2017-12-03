
import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'

import Page from './Page'
import AboutPage from './AboutPage'
import ResumePage from './ResumePage'
//import EmailPage from './EmailPage'
import Portfolio from './Portfolio'

class TabsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }

    this.tabLabels = [
      'ABOUT',
      'RESUME',
      'PORTFOLIO',
      'BLOG'
    ]
  }

  /**
   * Update the state when tab index needed to be changed
   */
  handleChangeIndex = (v) => {
    this.setState({
      ...this.state,
      slideIndex: v
    })
  }

  /**
   * Generate a list of <Tab> containing given labels 
   */
  genTabs = (labels) => {
    return (labels.map((v, i) => <Tab label={v} value={i} key={v} />))
  }

  render() {

    return (
      <div>
        <Tabs
          onChange={this.handleChangeIndex}
          value={this.state.slideIndex} >
          {this.genTabs(this.tabLabels)}
        </Tabs>

        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChangeIndex} >

          <Page styles={{ display: this.state.slideIndex === 0 ? '' : 'none' }}>
            <AboutPage/>
          </Page>

          <Page styles={{ display: this.state.slideIndex === 1 ? '' : 'none' }}>
            <ResumePage/>
          </Page>

          <Page styles={{ display: this.state.slideIndex === 2 ? '' : 'none' }}>
            <Portfolio/>
          </Page>
{/* 
          <Page styles={{ display: this.state.slideIndex === 3 ? '' : 'none' }}>
            <EmailPage/>
          </Page>
 */}
        </SwipeableViews>
      </div>
    )
  }

}

export default TabsContainer