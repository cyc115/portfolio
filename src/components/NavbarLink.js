import React from 'react'


function NavbarLink(props) {
  const {url, text} = props
  return (<a href={url}>{text}</a>)

}

export default NavbarLink