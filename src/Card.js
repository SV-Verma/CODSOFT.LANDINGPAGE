import React from 'react'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
  return (
    
            
          <div className="service-img">
            <img src={props.imgsrc } alt={props.imgsrc } />
            <div className="overlay">
              <div className="text">
              <NavLink to={props.link}>
                {props.name}
              </NavLink>
              </div>
        </div>
    </div>
  )
}

export default Card
