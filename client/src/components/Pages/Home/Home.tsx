import { FC, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import AddIcon from "@mui/icons-material/Add";

// import "./Home.css";
// import Resume from "../../assets/docs/Resumeoff (1).pdf"
import styles from "../../../assets/styles/home.module.scss";
import { Resume } from "../../../assets";
import { Button, Modal } from "@mui/material";
import AddRole from "./AddRole";
import { getRolesAPI } from "../../../API/AdminApi/HomeApi";

interface HomeProps {
    loggedIn: boolean;
}

interface RoleType {
    id: string;
    name: string;
}

const Home: FC<HomeProps> = ({ loggedIn }) => {
    const [roles, setRoles] = useState<RoleType[]>([]);
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

    useEffect(() => {
        const getRoles = async () => {
            const res = await getRolesAPI();
            // console.log("res in Home", res);
            setRoles(res);
            // const roleNamesArray = res.map((role: RoleType) => role.name);
            // console.log(roleNamesArray);
        };
        getRoles();
    }, []);

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
                                    strings: roles.map(
                                        (role: RoleType) => role.name
                                    ),
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
                                    <AddRole
                                        roles={roles}
                                        setRoles={setRoles}
                                    />
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
