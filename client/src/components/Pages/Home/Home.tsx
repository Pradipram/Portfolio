import { FC, useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import CloseIcon from "@mui/icons-material/Close";

// import "./Home.css";
// import Resume from "../../assets/docs/Resumeoff (1).pdf"
import styles from "../../../assets/styles/home.module.scss";
import { Button, Modal, TextField } from "@mui/material";
import AddRole from "./AddRole";
import {
    getResumeApi,
    getRolesAPI,
    uploadResumeApi,
} from "../../../API/AdminApi/HomeApi";
import { toast } from "react-toastify";

interface HomeProps {
    loggedIn: boolean;
}

interface RoleType {
    id: string;
    name: string;
}

const Home: FC<HomeProps> = ({ loggedIn }) => {
    const [roles, setRoles] = useState<RoleType[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [resume, setResume] = useState("");
    const [takingurl, setTakingUrl] = useState(false);

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
    const getRoles = async () => {
        const res = await getRolesAPI();
        setRoles(res);
    };

    const getResume = async () => {
        try {
            const resume = await getResumeApi();
            setResume(resume);
            setTakingUrl(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getRoles();
        getResume();
    }, []);

    const handleFileUpload = async () => {
        if (!resume) {
            toast.error("Please enter a url");
            return;
        }
        try {
            const res = await uploadResumeApi(resume);
            // console.log(res);
            setResume(resume);
            toast.success("Resume updated successfully");
            setTakingUrl(false);
        } catch (err) {
            toast.error("Internal server error");
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
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
                            href={resume}
                            download="pradip.pdf"
                        >
                            My Resume
                            <FaArrowRight style={{ marginLeft: "10px" }} />
                        </a>
                        {loggedIn && (
                            <>
                                {takingurl ? (
                                    <>
                                        <TextField
                                            label="Resume URL"
                                            variant="filled"
                                            onChange={(e) =>
                                                setResume(e.target.value)
                                            }
                                            size="small"
                                            sx={{
                                                marginLeft: "15px",
                                                input: {
                                                    color: "white",
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "rgba(255, 255, 255, 0.6)",
                                                },
                                                "& .MuiInputLabel-root.Mui-focused":
                                                    {
                                                        color: "white",
                                                    },
                                                "& .MuiFilledInput-root": {
                                                    backgroundColor:
                                                        "rgba(255, 255, 255, 0.1)",
                                                },
                                                "& .MuiFilledInput-root:hover":
                                                    {
                                                        backgroundColor:
                                                            "rgba(255, 255, 255, 0.2)",
                                                    },
                                                "& .MuiFilledInput-underline:before":
                                                    {
                                                        borderBottomColor:
                                                            "rgba(255, 255, 255, 0.4)",
                                                    },
                                                "& .MuiFilledInput-underline:after":
                                                    {
                                                        borderBottomColor:
                                                            "white",
                                                    },
                                                // margin: "15px",
                                            }}
                                        />
                                        <Button onClick={handleFileUpload}>
                                            <UploadIcon />
                                        </Button>
                                        <Button
                                            onClick={() => setTakingUrl(false)}
                                        >
                                            <CloseIcon />
                                        </Button>
                                    </>
                                ) : (
                                    <Button
                                        variant="contained"
                                        sx={{ margin: "15px" }}
                                        component="span"
                                        onClick={() => setTakingUrl(true)}
                                    >
                                        Change Resume
                                        <UploadIcon />
                                    </Button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
