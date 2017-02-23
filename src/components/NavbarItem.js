import React from 'react'
import NavbarLink from './NavbarLink'
import Navbar from './NavigationBar'

class NavbarItem extends React.Component {
  render() {
    const {url, text, submenu} = this.props

    return (
      <li key={text + url}>
        <NavbarLink url={url} text={text} />
        {submenu && <Navbar items={submenu} />}
      </li>
    )
  }
}

export default NavbarItem