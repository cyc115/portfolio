import SideBlock from './SideBlock'
import React from 'react'
const UnderConstruction = (props) => {

  return (
    <SideBlock paperStyle={{
      marginBottom: '10px'
    }}
    className='under-construction'  
    >

      <h1 style={{
          fontWeight: '500',
          fontSize: '32px',
          fontFamily: 'Roboto, sans-serif'
        }}>
        <i className='fa fa-wrench fa-2x'></i>
        <br/>
        <br/>
         SECTION UNDER CONSTRUCTION
        </h1>
    </SideBlock>
  )
}

export default UnderConstruction