import React, { FC } from 'react'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaCalendarCheck,FaBookOpenReader } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
// import {Link} from 'react-scroll'
import {Link} from "react-scroll";

import styles from "../../assets/styles/menus.module.scss";
import { Profile } from '../../assets';

interface MenusProps{
    toggle: Boolean
}

const Menus: FC<MenusProps> = ({toggle}) => {
  return (
    <>
    {
        toggle ? (
            <>
                <div className={styles.navbarProfilePic}>
                    <img src={Profile} alt="profile pic" />
                 </div>
                 <div className={styles.navItems}>
                    <div>
                        <div className={styles.navLink}>
                            <Link to='home' spy={true}>
                                <FaHome/>
                                Home
                            </Link>
                        </div>
                        <div className={styles.navLink}>
                            <Link to='about' spy={true} activeClass='active'>
                                <FcAbout/>
                                About
                            </Link>
                        </div>
                        <div className={styles.navLink}>
                            <Link to='education' spy={true}>
                                <FaBookOpenReader/>
                                Education
                            </Link>
                        </div>
                        <div className={styles.navLink}>
                            <Link to='project' spy={true}>
                                <GoProjectRoadmap/>
                                Projects
                            </Link>
                        </div>
                        <div className={styles.navLink}>
                            <Link to='techstack' spy={true}>
                                <FaCalendarCheck/>
                                Tech Stack
                            </Link>
                        </div>
                        <div className={styles.navLink}>
                            <Link to='contact' spy={true}>
                                <IoIosContact/>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                 </div>
            </>
        ):(
           <>
                <div className={styles.navbarProfilePicSmall}>
                    <img src={Profile} alt="profile pic" />
                 </div>
                 <div className={styles.navItems}>
                    <div>
                        <div className={styles.navLink}>
                            <Link to='home' spy={true}>
                                <FaHome size={30} title='Home'/> 
                            </Link>
                        </div>
                        <div className={styles.navLink}>
                            <Link to='about' spy={true}>
                                <FcAbout size={30} title='About'/>
                            </Link>
                            
                        </div>
                        <div className={styles.navLink}>
                            <Link to='education' spy={true}>
                                <FaBookOpenReader size={30} title='Education'/>
                            </Link>
                            
                        </div>
                        <div className={styles.navLink}>
                            <Link to='project' spy={true}>
                                <GoProjectRoadmap size={30} title='Projects'/>
                            </Link>
                            
                        </div>
                        <div className={styles.navLink}>
                            <Link to='techstack' spy={true}>
                                <FaCalendarCheck size={30} title='Tech Stack'/>
                            </Link>
                            
                        </div>
                        <div className={styles.navLink}>
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