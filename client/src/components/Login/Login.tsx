import LoginPackage from "react-signin-page";
import { bg } from "../../assets";
import { ChangeEvent, useState } from "react";
import { LoginAPI } from "../../API";

const loginInitials = {
    email: "",
    password: "",
};

const Login = () => {
    const [login, setLogin] = useState(loginInitials);

    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // console.log("handle login in clicked");
        // console.log(login);
        const response = LoginAPI(login);
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
