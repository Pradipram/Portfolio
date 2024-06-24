import { useState } from "react";
import Layout from "./components/Layout/Layout";

import styles from "./assets/styles/app.module.scss";
import Home from "./components/Pages/Home/Home";

function App() {
  const [toggle,setToggle] = useState(false);

  return (
    <div >
      <Layout toggle={toggle} setToggle={setToggle}/>
      <div className={toggle? styles.menuItemToggle : styles.menuItem}>
        <Home/>
      </div>
    </div>
  );
}

export default App;
