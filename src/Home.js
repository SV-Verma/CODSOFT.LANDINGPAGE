import React from 'react'
import Common from './Common'
import krish from './assets/RadhaKrishn.jpg'

import MySocial from './MySocial'
import Slideimg from './Slideimg'

const Home = () => {
  return (
    <>
    <Common 
    name="GROW YOUR BUSINESS WITH"
    imgsrc={krish}
    visit="https://bhaskarenterprise.com/"
    btname="Get Started"
    text="BHASKAR ENTERPRISES"
    />
    <Slideimg />
     <MySocial />
    </>
  )
}

export default Home;
