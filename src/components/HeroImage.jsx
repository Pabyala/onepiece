import React from 'react'
import "./HeroImageStyle.css"

function HeroImage(props) {
  return (
    <div className='hero'>
        <img className='heroImg' src={props.heroImg} alt="" />
        <div className="hero-text">
          <div className="text-container">
            <h1>{props.title}</h1>
          </div>
        </div>
    </div>
  )
}

export default HeroImage