//390 px in totoal = (size + 2 * 30px margin )

import React from 'react'
import Paper from 'material-ui/Paper'
import HoverablePaper from './HoverablePaper'

function SideBlock(props) {
  return (
    <HoverablePaper
      className='side-paper-main'
      paperStyle= {props.paperStyle}
    >
      {props.children}
    </HoverablePaper>
  )
}

export default SideBlock