import { MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"

import Menus from "../Menus/Menus";
import './Layout.css'

const Layout = ({toggle,setToggle}) => {
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
        </div>
    </>
  )
}

export default Layout
