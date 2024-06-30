import { FC, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import AddIcon from "@mui/icons-material/Add";

// import "./Home.css";
// import Resume from "../../assets/docs/Resumeoff (1).pdf"
import styles from "../../../assets/styles/home.module.scss";
import { Resume } from "../../../assets";
import { Button, Modal } from "@mui/material";
import AddRole from "./AddRole";

interface HomeProps {
    loggedIn: boolean;
}

const Home: FC<HomeProps> = ({ loggedIn }) => {
    // const [role, setRole] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <div className={styles.role}>
                        <h5 className={styles.typewriter}>
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
                        {loggedIn && (
                            <>
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={handleOpen}
                                >
                                    <AddIcon />
                                </Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <AddRole />
                                </Modal>
                            </>
                        )}
                    </div>
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
