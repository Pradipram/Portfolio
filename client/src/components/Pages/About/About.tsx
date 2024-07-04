import { FC, useEffect, useState } from "react";
import { aboutStyle } from "../../../assets";
import { Profile } from "../../../assets";
import EditIcon from "@mui/icons-material/Edit";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getAboutApi, updateAboutAPI } from "../../../API";
import { toast } from "react-toastify";

const aboutTextInit =
    "I'm a prefinal year student at IIT(ISM) Dhanbad pursuing Bachelor of Technology in computer science and engineering. I am interested in Data structure and algorithms along with Web development.";

interface AboutProps {
    loggedIn: boolean;
}

const About: FC<AboutProps> = ({ loggedIn }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [aboutText, setAboutText] = useState(aboutTextInit);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        // Fetch the current about text from the server
        const fetchAboutText = async () => {
            try {
                const about = await getAboutApi();
                if (about) {
                    setAboutText(about);
                }
            } catch (error) {
                console.error("Error fetching about text:", error);
            }
        };

        fetchAboutText();
    }, []);

    const handleEditClick = () => {
        setInputText(aboutText);
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            const res = await updateAboutAPI(inputText);
            if (res && res.status === 200) {
                setAboutText(inputText);
                toast.success("About updated successfully");
                setIsEditing(false);
            }
        } catch (error) {
            toast.error("Internal server error");
            console.error("Error saving about text:", error);
        }
    };

    return (
        <div className={aboutStyle.about} id="about">
            <div>
                <img src={Profile} alt="profile" />
            </div>
            <div className={aboutStyle.aboutContent}>
                <h1>About me</h1>
                {isEditing && loggedIn ? (
                    <div>
                        <TextField
                            multiline
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            rows={4}
                            fullWidth
                            sx={{ width: "65vw" }}
                        />
                        <div className={aboutStyle.updateUpdateButton}>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={handleSaveClick}
                                sx={{ margin: 2 }}
                            >
                                Save
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => setIsEditing(false)}
                            >
                                <CloseIcon color="action" />
                            </Button>
                        </div>
                    </div>
                ) : (
                    <p>{aboutText}</p>
                )}
                {loggedIn && !isEditing && (
                    <Button
                        onClick={handleEditClick}
                        className={aboutStyle.editButton}
                    >
                        <EditIcon />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default About;
