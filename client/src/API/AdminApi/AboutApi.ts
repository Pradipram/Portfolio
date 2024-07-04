import axios from "axios";

export const updateAboutAPI = async (about: string) => {
    try {
        const res = await axios.post(
            "/admin/update-about",
            { about },
            { withCredentials: true }
        );
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getAboutApi = async () => {
    try {
        const res = await axios.get("/get-about");
        if (res.status === 200) {
            return res.data.about;
        } else {
            throw new Error("Internal server error");
        }
    } catch (err) {
        console.log(err);
    }
};
