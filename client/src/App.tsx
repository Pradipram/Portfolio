import { useEffect, useState } from "react";
import {
  About,
  AddProject,
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
import { getUserAPI } from "./API";
// import Home from "./components/Pages/Home/Home";

function App() {
  const [toggle, setToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const getUser = async () => {
    const res = await getUserAPI();
    // console.log("res in getuser", res);
    if (res?.status === 200) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const HomeComponents = () => (
    <div>
      <Layout toggle={toggle} setToggle={setToggle} />
      <div className={toggle ? styles.menuItemToggle : styles.menuItem}>
        <Home loggedIn={loggedIn} />
        <About loggedIn={loggedIn} />
        <Education />
        <Project toggle={toggle} loggedIn={loggedIn} />
        <Techstack toggle={toggle} loggedIn={loggedIn} />
        <Contact />
      </div>
    </div>
  );

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponents />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/add-project" element={<AddProject />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
