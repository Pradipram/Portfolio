import { useState } from "react";
import { About, Contact, Education, Home, Layout, Project, Techstack } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "./assets/styles/app.module.scss";
// import Home from "./components/Pages/Home/Home";

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <Layout toggle={toggle} setToggle={setToggle} />
            <div className={toggle ? styles.menuItemToggle : styles.menuItem}>
                <Home />
                <About />
                <Education />
                <Project toggle={toggle}/>
                <Techstack toggle={toggle}/>
                <Contact />
            </div>
            <ToastContainer/>
        </div>
    );
}

export default App;
