import React from 'react'
import videoSource from './video/Video.mp4';
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {

  return (
    <div>
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

      <div className='services'>
      <div className="service-container">
        <div className="service-heading">
          <h1>BHASKAR ENTERPRISE IS COMPLETE LIGHTING SOLUTIONS,</h1>
          <p>
            WE HAVE STARTED OUR BUSINESS WITH A SMALL RANGE OF PRODUCTS 
            IN FIROZABAD THROUGH E-COMMERCE PLATFORMS LIKE AMAZON, 
            FLIPKART. NOW WE ARE DEALING SINCE 2023 IN A WIDE RANGE OF 
            PRODUCTS AND MULTIPLE LIGHTS.
            BHASKAR ENTERPRISES CIRCULATION IS IN ALL OVER INDIA,OUR 
            MANUFACTURING UNITS ARE IN CHINA ON A LARGE SCALE
          </p>
        </div>
        <h1 className='popular'>Popular Products</h1>
        <div className="service-box">
 {
   Sdata.map((val, ind) =>{
    return <Card key={ind}
     imgsrc={val.imgsrc}
     name={val.name}
     link={val.link}
    />
   })
 }
</div>
        <h2>OUR MISSION IS TO PROVIDE CHANDELIERS PRODUCT AT SUCH CHEAP
             PRICES WITH A1 QUALITY SO EVERYONE OR MAINLY MIDDLE CLASS
              FAMILIES CAN AFFORD IT.</h2>
      </div>
    </div>
    </div>
  )
}

export default Service
