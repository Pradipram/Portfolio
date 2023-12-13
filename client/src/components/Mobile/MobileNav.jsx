import React, { useState } from 'react';
import './MobileNav.css';
import { MdOutlineMenu } from "react-icons/md";
import MobileMenu from './MobileMenu';

const MobileNav = () => {
  const [open,setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen(!open);
  }

  return (
    <div className='mobile-view'>
      <div className="mobile-nav">
        <MdOutlineMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />
        <div className='mobile-nav-header'>
          <span style={{ display: "inline-block", marginLeft: "auto" }}>My Portfolio</span>
        </div>
      </div>
        <MobileMenu open = {open} setOpen = {setOpen}/>
    </div>
  )
}

export default MobileNav