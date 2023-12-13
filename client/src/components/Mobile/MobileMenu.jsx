import { FaCalendarCheck, FaHome } from 'react-icons/fa'
import { FaBookOpenReader } from 'react-icons/fa6'
import { FcAbout } from 'react-icons/fc'
import { GoProjectRoadmap } from 'react-icons/go'
import { IoIosContact } from 'react-icons/io'
import { Link } from 'react-scroll'

const MobileMenu = ({open,setOpen}) => {

    const handleMenuclick = () =>{
        setOpen(false);
    }

  return (
    <div className={open?"mobile-menu":'mobile-menu-close'}>
        <div className="nav-item">
            <div className="nav-link">
                <Link to='home' spy={true} onClick={handleMenuclick}>
                    <FaHome/>
                    Home
                </Link>
            </div>
            <div className="nav-link">
                <Link to='about' spy={true} activeClass='active' onClick={handleMenuclick}>   
                    <FcAbout/>
                    About
                </Link>
            </div>
            <div className="nav-link">
                <Link to='education' spy='true' onClick={handleMenuclick}>
                    <FaBookOpenReader/>
                    Education
                </Link>
            </div>
            <div className="nav-link">
                <Link to='project' spy='true' onClick={handleMenuclick}>
                    <GoProjectRoadmap/>
                    Projects
                </Link>
            </div>
            <div className="nav-link">
                <Link to='techstack' spy='true' onClick={handleMenuclick}>
                    <FaCalendarCheck/>
                    Tech Stack
                </Link>
            </div>
            <div className="nav-link">
                <Link to='contact' spy='true' onClick={handleMenuclick}>
                    <IoIosContact/>
                    Contact Us
                </Link>
            </div>
        </div>

    </div>
  )
}

export default MobileMenu