//390 px in totoal = (size + 2 * 30px margin )

import React from 'react'
import Paper from 'material-ui/Paper'
import HoverablePaper from './HoverablePaper'

import {cyan500 } from 'material-ui/styles/colors'

function SideBlock(props) {
  return (
    <HoverablePaper
      className={`side-paper-main ${props.className}`}
      paperStyle={{
        backgroundColor: cyan500,
        padding : '40px',
        ...props.paperStyle
      }}
    >
      {props.children}
    </HoverablePaper>
  )
}

export default SideBlock