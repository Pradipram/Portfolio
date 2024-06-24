import React from "react";
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";

// import "./Home.css";
// import Resume from "../../assets/docs/Resumeoff (1).pdf"
import styles from "../../../assets/styles/home.module.scss";
import { Resume } from "../../../assets";

const Home = () => {
    const handleHireMeClick = () => {
        const email = "pradipramnawa@gmail.com";
        const subject = "Job Opportunity"; // You can customize the subject
        const body =
            "Hello,\n\nI'm interested in discussing job opportunities with you.";

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        // Open the email client
        window.location.href = mailtoLink;
    };

    return (
        <>
            <div
                className={`container-fluid ${styles.homeContainer}`}
                id="home"
            >
                <div className={styles.container}>
                    <h5>
                        <Typewriter
                            options={{
                                strings: [
                                    "Software Developer",
                                    "Full Stack Web Developer",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h5>
                    <h1>I am Pradip Ram</h1>
                    <div className="Home-button">
                        <button
                            className={`btn ${styles.btnHire}`}
                            onClick={handleHireMeClick}
                        >
                            Hire Me
                            <FaArrowRight style={{ marginLeft: "10px" }} />
                        </button>
                        <a
                            className={`btn ${styles.btnCv}`}
                            href={Resume}
                            download="pradip.pdf"
                        >
                            My Resume
                            <FaArrowRight style={{ marginLeft: "10px" }} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
