import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"

import "./Layout.css"
import Home from '../../pages/Home/Home'
import Menus from '../Menus/Menus'
import About from '../../pages/About/About'
import Techstack from '../../pages/TechStack/Techstack'
import Project from '../../pages/Project/project'
import Education from '../../pages/education/Education'
import Contact from '../../pages/Contact/Contact'

const Layout = () => {
    const [toggle,setToggle] = useState(false);

    // function for changing the toggle
    const handleToggle = () =>{
        setToggle(!toggle);
    }
  return (
    <>
        <div className="sidebar-section">
            <div className={toggle ? "sidebar sidebar-toggle" :"sidebar"}>
                <div className="sidebar-toggle-icons">
                    <p onClick={handleToggle}>
                        {
                            toggle ? <MdOutlineKeyboardDoubleArrowLeft size={30}/> : <MdOutlineKeyboardDoubleArrowRight size={30}/>
                        }
                    </p>
                </div>
                <Menus toggle = {toggle}/>
            </div>
            <div className={toggle ? "menu-item-toggle":"menu-item"}>
                <Home/>
                <About/>
                <Education/>
                <Project toggle = {toggle}/>
                <Techstack toggle = {toggle}/>
                <Contact/>
            </div>
        </div>
    </>
  )
}

export default Layout
