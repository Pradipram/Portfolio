import {
    MdOutlineKeyboardDoubleArrowRight,
    MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

import { Menus } from "../Menus";
import styles from "../../assets/styles/layout.module.scss";
import { FC } from "react";

interface layoutProps {
    toggle: Boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: FC<layoutProps> = ({ toggle, setToggle }) => {
    // function for changing the toggle
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div className={styles.sidebarSection}>
                <div
                    className={
                        toggle
                            ? `${styles.sidebar} ${styles.sidebarToggle}`
                            : `${styles.sidebar}`
                    }
                >
                    <div className={styles.sidebarToggleIcons}>
                        <p onClick={handleToggle}>
                            {toggle ? (
                                <MdOutlineKeyboardDoubleArrowLeft size={30} />
                            ) : (
                                <MdOutlineKeyboardDoubleArrowRight size={30} />
                            )}
                        </p>
                    </div>
                    <Menus toggle={toggle} />
                </div>
            </div>
        </>
    );
};

export default Layout;
