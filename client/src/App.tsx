import { useState } from "react";
import { About, Education, Home, Layout, Project, Techstack } from "./components";

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
            </div>
        </div>
    );
}

export default App;
