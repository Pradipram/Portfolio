import axios from "axios";

export const AddRoleApi = async (roleName: string) => {
    // console.log("coming in api", roleName);
    try {
        const res = await axios.post("/addrole", roleName, {
            withCredentials: true,
        });
        console.log("response in addroleapi", res);
    } catch (err) {
        console.log(err);
    }
};
