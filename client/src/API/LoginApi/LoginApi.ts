import axios from "axios";

interface LoginApiProps {
    email: string;
    password: string;
}

export const LoginAPI = async (loginDetails: LoginApiProps) => {
    // console.log("LoginApi,9", loginDetails);
    try {
        const res = await axios.post("/login", loginDetails);
        // console.log(res);
        return res;
    } catch (err) {
        console.log(err);
        // return err;
    }
};

export const getUserAPI = async () => {
    try {
        const res = await axios.get("/getuser", { withCredentials: true });
        // console.log("response", res);
        return res;
    } catch (err) {
        console.log(err);
        // return err;
    }
};
