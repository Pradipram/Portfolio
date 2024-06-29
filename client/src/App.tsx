import { useState } from "react";
import {
    About,
    Contact,
    Education,
    Home,
    Layout,
    Login,
    Project,
    Techstack,
} from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./assets/styles/app.module.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Home from "./components/Pages/Home/Home";

function App() {
    const [toggle, setToggle] = useState(false);
    const HomeComponents = () => (
        <div>
            <Layout toggle={toggle} setToggle={setToggle} />
            <div className={toggle ? styles.menuItemToggle : styles.menuItem}>
                <Home />
                <About />
                <Education />
                <Project toggle={toggle} />
                <Techstack toggle={toggle} />
                <Contact />
            </div>
        </div>
    );

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeComponents />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
            <ToastContainer />
        </div>
    );
}

export default App;
