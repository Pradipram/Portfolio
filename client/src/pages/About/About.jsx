import React from 'react'

import "./About.css"
import Profile from "../../assets/image/profile.jpeg"

const About = () => {
  return (
    <div className="about" id='about'>
        <div >
            <img src={Profile} alt="profile" />
        </div>
        <div className='about-content'>
            <h1>About me</h1>
            <p>I'm a prefinal year student at IIT(ISM) Dhanbad pursuing Bachelor of Technology in computer science and engineering. I am interested in Data structure and algorithms along with Web development.</p>
        </div>
    </div>
  )
}

export default About