import React from 'react'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaCalendarCheck,FaBookOpenReader } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import {Link} from 'react-scroll'

import "./Menus.css"
import Profile from "../../assets/image/profile.jpeg"

const Menus = ({toggle}) => {
  return (
    <>
    {
        toggle ? (
            <>
                <div className="navbar-profile-pic">
                    <img src={Profile} alt="profile pic" />
                 </div>
                 <div className="nav-items">
                    <div className="nav-item">
                        <div className="nav-link">
                            <Link to='home' spy={true}>
                                <FaHome/>
                                Home
                            </Link>
                        </div>
                        <div className="nav-link">
                            <Link to='about' spy={true} activeClass='active'>
                                <FcAbout/>
                                About
                            </Link>
                        </div>
                        <div className="nav-link">
                            <Link to='education' spy='true'>
                                <FaBookOpenReader/>
                                Education
                            </Link>
                        </div>
                        <div className="nav-link">
                            <Link to='project' spy='true'>
                                <GoProjectRoadmap/>
                                Projects
                            </Link>
                        </div>
                        <div className="nav-link">
                            <Link to='techstack' spy='true'>
                                <FaCalendarCheck/>
                                Tech Stack
                            </Link>
                        </div>
                        <div className="nav-link">
                            <Link to='contact' spy='true'>
                                <IoIosContact/>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                 </div>
            </>
        ):(
           <>
                <div className="navbar-profile-pic-small">
                    <img src={Profile} alt="profile pic" />
                 </div>
                 <div className="nav-items">
                    <div className="nav-item">
                        <div className="nav-link">
                            <Link to='home' spy={true}>
                                <FaHome size={30} title='Home'/> 
                            </Link>
                        </div>
                        <div className="nav-link">
                            <Link to='about' spy={true}>
                                <FcAbout size={30} title='About'/>
                            </Link>
                            
                        </div>
                        <div className="nav-link">
                            <Link to='education' spy={true}>
                                <FaBookOpenReader size={30} title='Education'/>
                            </Link>
                            
                        </div>
                        <div className="nav-link">
                            <Link to='project' spy={true}>
                                <GoProjectRoadmap size={30} title='Projects'/>
                            </Link>
                            
                        </div>
                        <div className="nav-link">
                            <Link to='techstack' spy={true}>
                                <FaCalendarCheck size={30} title='Tech Stack'/>
                            </Link>
                            
                        </div>
                        <div className="nav-link">
                            <Link to='contact' spy={true}>
                                <IoIosContact size={30} title='Contact Us'/>
                            </Link>
                        </div>
                    </div>
                 </div>
            </>
        )
    }
    </>
  )
}

export default Menus