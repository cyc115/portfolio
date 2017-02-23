import React from 'react'
import NavbarItem from './NavbarItem'
import './Navgation.css'

class Navbar extends React.Component {
  generateNavbarItems(item) {
    return (
      <NavbarItem
        text={item.text}
        url={item.url}
        submenu={item.submenu}
      />)
  
  }

  render() {
    const {items = []} = this.props
    let is = items.map(this.generateNavbarItems)
    
    return (
      <ul className="menu">
        {is}
      </ul>
    )
  }
}

export default Navbar