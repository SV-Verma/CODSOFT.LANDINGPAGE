import React from 'react'
import Common from './Common'
import gold from './assets/gold.jpg'

const About = () => {
  return (
    <div className='about'>
    <Common 
    name="radhe"
    imgsrc={gold}
    visit="/Contact"
    btname="Contact Now"
    text="BHASKAR ENTERPRISES PROVIDE CHANDELIERS PRODUCT AT 
    SUCH CHEAP PRICES WITH A1 QUALITY SO EVERYONE OR MAINLY 
    MIDDLE CLASS FAMILIES CAN AFFORD IT."
    />
    </div>
  )
}

export default About
