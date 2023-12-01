import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"

import "./Layout.css"
import Home from '../../pages/Home/Home'

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
            </div>
            <div className="container">
                <Home/>
            </div>
        </div>
    </>
  )
}

export default Layout
