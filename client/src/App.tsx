import { useState } from "react";
import { About, Home, Layout, } from "./components";

import styles from "./assets/styles/app.module.scss";
// import Home from "./components/Pages/Home/Home";

function App() {
  const [toggle,setToggle] = useState(false);

  return (
    <div >
      <Layout toggle={toggle} setToggle={setToggle}/>
      <div className={toggle? styles.menuItemToggle : styles.menuItem}>
        <Home/>
        <About/>
      </div>
    </div>
  );
}

export default App;
