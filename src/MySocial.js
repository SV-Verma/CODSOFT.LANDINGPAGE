import React from 'react'
import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { NavLink } from 'react-router-dom'
import { AiOutlineInstagram } from "react-icons/ai";

const MySocial = () => {
  return (
    <div className="mysocial">
      <div className='social-layout'>
      <h1>My Journey On Social Media</h1>
        <div className="social-container">
            <div className="icons">
            <NavLink to="www.youtube.com/@aviralshree5292">
            <BsYoutube className='yt-icon' />
            </NavLink>
            <button className='social-btn'>
                <NavLink to="www.youtube.com/@aviralshree5292"> Follow</NavLink>
            </button>
            </div>

            <div className="icons">
            <NavLink to="www.instagram.com/bhaskar_enterprises001">
            <AiOutlineInstagram className='instra' />
          </NavLink>
            <button className='social-btn'>
                <NavLink to="www.instagram.com/bhaskar_enterprises001">Follow</NavLink>
            </button>
            </div>

            <div className="icons">
            <NavLink to="www.instagram.com/bhaskar_enterprises001">
            < BsFacebook className='twiter' />
          </NavLink>
            <button className='social-btn'>
                <NavLink to="www.instagram.com/bhaskar_enterprises001">Follow</NavLink>
            </button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default MySocial
