import React from 'react'
import FontAwesome from 'react-fontawesome'

const iconStyle = {
  border: 'solid',
  borderRadius: '50%',
  margin: '2px',
  padding: '0px',
  width: '25px',
  lineHeight: '25px',
  color: 'white',
  backgroundColor: 'black'
}

const footerStyle = {
  marginTop: '25px',
  float: 'bottom'
}
// Footer component is the rows of floating icons on the bottom of the page
class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.iconList = [
      this.createSiteObject('github', 'http://www.github.com/cyc115'),
      this.createSiteObject('stack-overflow', 'http://stackoverflow.com/users/1272013/cyc115'),
      this.createSiteObject('linkedin', 'https://www.linkedin.com/in/chen-yuechuan-995b9b54'),
      this.createSiteObject('facebook', 'https://www.facebook.com/chen.yuechuan')
    ]
  }

  // creates a floating icon button (eg. linkedin , fb button )
  createSiteObject(iconName, url = '') {
    return {
      name: iconName,
      url: url
    }
  }

  // create an icon and apply style 
  createIcon(icon, style) {
    return (
      <a
        key={icon.url}
        href={icon.url}
        target='_blank'
        style={{ color: 'inherit' }}>
        <FontAwesome
          name={icon.name}
          style={style}
        />
      </a>
    )
  }

  // renders the footer section
  // allow the style of the container div to be overriden
  // allow the icon styles to be overriden 
  render() {
    const { style = {}, iconS = {} } = this.props

    return (
      <div style={{
        ...footerStyle,
        ...style
      }} >
        {this.iconList.map(icon =>
          this.createIcon(icon, { ...iconStyle, ...iconS }))}
      </div>
    )
  }
}

export default Footer