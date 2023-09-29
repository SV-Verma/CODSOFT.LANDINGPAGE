import React from 'react'
import { BiLogoWhatsapp } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-layout">
          <div className="footer-nav">
            <ul>
              <li><NavLink to="/">
                Home
              </NavLink></li>
              <li>
                <NavLink to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-socials">
            <NavLink to="http://wa.me/8279940763">
              <BiLogoWhatsapp className='wa-footer' />
            </NavLink>
            <NavLink to="www.instagram.com/bhaskar_enterprises001">
              <AiOutlineInstagram className='in-footer' />
            </NavLink>
            <NavLink to="www.instagram.com/bhaskar_enterprises001">
            <BsFacebook className='fa-footer' />
            </ NavLink>
            <NavLink to="www.youtube.com/@aviralshree5292">
              <BsYoutube className='yt-footer' />
            </NavLink>
          </div>

          <div class="footer3">Copyright © <h4 className="ft-name">TiRupATi JeWelleR's</h4>since:1884</div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
