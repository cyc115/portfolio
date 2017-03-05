
import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import Markdown from 'react-remarkable'

import Page from './Page'
import AboutPage from './AboutPage'
import ResumePage from './ResumePage'
import EmailPage from './EmailPage'
import Portfolio from './Portfolio'
import UnderConstruction from './UnderConstruction'


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
      'CONTACT'
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

    let about = <div></div>
    let resume = <div></div>
    let portfolio = <div></div>
    let email = <div></div>

    switch (this.state.slideIndex) {
      default:
      case 0:
        about = <AboutPage/>
        break;
      case 1:
        resume = <ResumePage/>
        break;

      case 2:
        portfolio = <Portfolio/>
        break;

      case 3:
        email = <EmailPage/>
        break;
    }

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

          <Page>
            {about}
          </Page>

          <Page>
            {resume}
          </Page>

          <Page>
            {portfolio}
          </Page>

          <Page>
            {email}
          </Page>

        </SwipeableViews>
      </div>
    )
  }

}

export default TabsContainer