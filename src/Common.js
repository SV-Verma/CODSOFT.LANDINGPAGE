import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
    <section id='header' className='header'>
        <div className="header-container">
            <div className="row">
                <div className="home-container">
                    <div className="home-left">
                      <h1>
                        {props.name} 
                        <strong>SHREE</strong></h1>
                           <h2>{props.text}</h2>
                            <div className="">
                              <NavLink to={props.visit} className="btn-get-started">
                                {props.btname}
                              </NavLink>

                            </div>
                          </div>

                          <div className='own-img'>
                          <div className="img-shadow">
                          {/* backgroundImage: url({props.imgsrc}) */}
                          <img src={props.imgsrc} alt="" />
                          </div>
                          </div>
                </div>
            </div>

        </div>
        <div className="white-bg"></div>
    </section>
    </>
  )
}

export default Common;
