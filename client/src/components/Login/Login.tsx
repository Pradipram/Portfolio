import LoginPackage from "react-signin-page";
import { bg } from "../../assets";
import { ChangeEvent, FC, useState } from "react";
import { LoginAPI } from "../../API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const loginInitials = {
    email: "",
    password: "",
};

interface LoginProps {
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: FC<LoginProps> = ({ setLoggedIn }) => {
    const [user, setUser] = useState(loginInitials);
    const navigate = useNavigate();

    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // console.log("handle login in clicked");
        // console.log(login);
        const response = await LoginAPI(user);
        console.log("response", response);
        if (response?.status === 200) {
            toast.success("You have logged in successfully");
            navigate("/");
            setLoggedIn(true);
        }
    };

    return (
        <LoginPackage
            bg={bg}
            onValueChange={onValueChange}
            handleSubmit={handleLogin}
        />
    );
};

export default Login;
