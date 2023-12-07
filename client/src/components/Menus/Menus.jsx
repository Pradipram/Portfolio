import React from 'react'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaCalendarCheck,FaBookOpenReader } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosContact } from "react-icons/io";

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
                            <FaHome/>
                            Home
                        </div>
                        <div className="nav-link">
                            <FcAbout/>
                            About
                        </div>
                        <div className="nav-link">
                            <FaBookOpenReader/>
                            Education
                        </div>
                        <div className="nav-link">
                            <GoProjectRoadmap/>
                            Projects
                        </div>
                        <div className="nav-link">
                            <FaCalendarCheck/>
                            Tech Stack
                        </div>
                        <div className="nav-link">
                            <IoIosContact/>
                            Contact Us
                        </div>
                    </div>
                 </div>
            </>
        ):(
           <>
                <div className="navbar-profile-pic-small">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCy2Ci23jhbgfaoIVUPkBjWmXeo79zeg_vZDKhbBQfEOV2Hes_-Vr_a14pdmUHCX37II&usqp=CAU" alt="profile pic" />
                 </div>
                 <div className="nav-items">
                    <div className="nav-item">
                        <div className="nav-link">
                            <FaHome size={30} title='Home'/>
                            
                        </div>
                        <div className="nav-link">
                            <FcAbout size={30} title='About'/>
                            
                        </div>
                        <div className="nav-link">
                            <FaBookOpenReader size={30} title='Education'/>
                            
                        </div>
                        <div className="nav-link">
                            <GoProjectRoadmap size={30} title='Projects'/>
                            
                        </div>
                        <div className="nav-link">
                            <FaCalendarCheck size={30} title='Tech Stack'/>
                            
                        </div>
                        <div className="nav-link">
                            <IoIosContact size={30} title='Contact Us'/>
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