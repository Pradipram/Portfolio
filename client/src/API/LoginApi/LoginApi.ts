import axios from "axios";

interface LoginApiProps {
    email: string;
    password: string;
}

export const LoginAPI = async (loginDetails: LoginApiProps) => {
    // console.log("LoginApi,9", loginDetails);
    try {
        const res = await axios.post("/login", loginDetails);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
