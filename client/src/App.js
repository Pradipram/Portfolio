// importing libraries 
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

// importing components 
import MobileNav from "./components/Mobile/MobileNav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Education from "./pages/education/Education";
import Project from "./pages/Project/project";
import Techstack from "./pages/TechStack/Techstack";
import Contact from "./pages/Contact/Contact";
import Layout from "./components/Layout/Layout";


function App() {
  const [toggle,setToggle] = useState(false);

  return (
    <>
      <MobileNav/>
      <Layout toggle = {toggle} setToggle = {setToggle}/>
      <div className={toggle ? "menu-item-toggle":"menu-item"}>
          <Home/>
          <About/>
          <Education/>
          <Project toggle = {toggle}/>
          <Techstack toggle = {toggle}/>
          <Contact/>
      </div>
      <ToastContainer/>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
