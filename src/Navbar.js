import React from 'react'
import krishn from './assets/RadhaKrishn.jpg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav className='nav'>

                <img src={krishn} alt="krishnji" />

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
            </nav>
        </div>
    )
}

export default Navbar
