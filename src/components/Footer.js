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
  backgroundColor : 'black'
}

const footerStyle = {
  marginTop : '25px',
  float : 'bottom'
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.iconSize = '1'
    this.iconList = [
      this.createSiteObject('github', 'http://www.github.com/cyc115'),
      this.createSiteObject('stack-overflow', 'http://stackoverflow.com/users/1272013/cyc115'),
      this.createSiteObject('linkedin','https://www.linkedin.com/in/chen-yuechuan-995b9b54'),
      this.createSiteObject('facebook', 'https://www.facebook.com/chen.yuechuan')
    ]
  }

  createSiteObject(iconName, url='') {
    return {
      name: iconName,
      url : url
    }
  }
  
  createIcon(icon, size, style) {
    return (
      <a
        href={icon.url}
        target='_blank'
        style={{ color: 'inherit' }}>
      <FontAwesome
        name={icon.name}
        size={size}
        style={style}
        />
      </a>  
    )
  }

  render() {
    return (
      <div style={footerStyle}>
        {this.iconList.map( icon => this.createIcon(icon, this.iconSize, iconStyle)) }
      </div>
    )
  }
}

export default Footer