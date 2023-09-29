import React, { useState } from 'react'
import krish from './assets/RadhaKrishn.jpg'
import { NavLink } from 'react-router-dom'
import { BiLogoWhatsapp } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";


const Contact = () => {
    const [data, setData] = useState({
     fullname: "",
     phone: "",
     email: "",
     msg: ""
    });
    const handleInputChange = (event) => {
      const {name, value} =event.target;
      setData ((preVal)  => {
         return {
          ...preVal,
          [name] : value,
         }
      })
    }
  
    const formSubmit = (event) => {
      event.preventDefault();
      alert(
        `My Name is${data.fullname}.My phoneNo is${data.phone} and Email${data.email}, Massege To Shree ${data.msg}`
      );
      console.log(data);
    }


  return (
    <div className='contacts'>
      <div className='contact' >
        <div className="contact-container">
          <img src={krish} alt="" />
          <div className="contact-main">
            <form onSubmit={formSubmit}>
              <h1 className='contact-h'> Contact Us</h1>
              <div className="contact-two-section">
                <input type="text" 
                name='fullname'
                value={data.fullname}
                onChange={handleInputChange}
                placeholder='Enter Your Name' />
              </div>
              <div>
                <input type="number"
                name='phone'
                value={data.phone}
                onChange={handleInputChange}
                placeholder='Enter Your PhoneNo' className='phoneno' />
              </div>
              <div className="contact-two-section">
                <input type="email"
                name='email'
                value={data.email}
                onChange={handleInputChange}
                placeholder='Enter Your Email' />
              </div>
              <div>
                <textarea 
                id="text" 
                cols="31" 
                rows="4"
                 name="msg"
                 value={data.msg}
                 onChange={handleInputChange}
                 placeholder='Your Message' className='textarea'></textarea>
              </div>
              <div className='contact-btn'>
                <button className='btn'>Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
      <div className="contact-details">
        <div className="call">
          <h3>CALL US</h3>
          <p> <BsTelephone />+910000000</p>
        </div>
        <div className="location">
          <h3>
            LOCATION
          </h3>
          <p>
            <CiLocationOn />
            283-203</p>
        </div>
        <div className="social-icon">
          <NavLink to="www.instagram.com/bhaskar_enterprises001">
            <AiOutlineInstagram />
          </NavLink>
          <NavLink to="http://wa.me/8279940763">
            <BiLogoWhatsapp />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Contact
