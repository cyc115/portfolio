
import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import Markdown from 'react-remarkable'

import Page from './Page'
import AboutPage from './AboutPage'
import ResumePage from './ResumePage'
import EmailPage from './EmailPage'
import UnderConstruction from './UnderConstruction'
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
      'RESUME',
      //      'PORTFOLIO',
      //      'INTEREST',
      'CONTACT'
    ]

    this.generateAboutPageContent = this.generateAboutPageContent.bind(this)
  }

  handleChange = (v) => {
    this.setState({
      ...this.state,
      slideIndex: v
    })
    console.dir(`changed idx to : ${this.state.slideIndex}`);
  }

  genTabs = (labels) => {
    return (labels.map((v, i) => <Tab label={v} value={i} key={v} />))
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


          <Page>
            <AboutPage>
              {this.generateAboutPageContent()}
            </AboutPage>
          </Page>

          <Page>
            <ResumePage />
          </Page>

          <Page>
            <EmailPage/>
          </Page>



        </SwipeableViews>
      </div>
    )
  }

  generateAboutPageContent() {
    return (
      <div className='about-page-main'>
        <p>Hi, I'm' Mike.</p>
        <Markdown>
          Recently graduated from [McGill University](https://www.mcgill.ca) with a degree of Bachelor of Software Engineering. I am a learner, explorer and an aspiring dancer at heart.
      </Markdown>


        <p>Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those that works hard and plays hard.</p>

        <p>
          Moved from China to Montreal, Montreal to New York. I am seeking for an exciting opportunity to begin my career in California.
        </p>

        <p>
          <Markdown>
            Come and say Hi via the "Contact" tab or on [Facebook](https://www.facebook.com/chen.yuechuan)!
          </Markdown>
        </p>
      </div>
    )
  }

  generatePortfolio() {
    return (
      <div></div>
    )
  }
}

export default TabsContainer