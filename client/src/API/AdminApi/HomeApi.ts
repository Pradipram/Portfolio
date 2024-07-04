import axios from "axios";

export const AddRoleApi = async (roleName: string) => {
    // console.log("coming in api", roleName);
    try {
        const res = await axios.post(
            "/admin/add-role",
            { roleName },
            {
                withCredentials: true,
            }
        );
        // console.log("response in addroleapi", res);
        if (res.status === 201) {
            return res.data.role;
        }
    } catch (err) {
        console.log(err);
    }
};

export const getRolesAPI = async () => {
    try {
        const res = await axios.get("/get-role", {
            withCredentials: true,
        });
        // console.log("roles", res);
        return res.data.roles;
    } catch (err) {
        console.log("error while getting roles", err);
        return [];
    }
};

export const deleteRoleApi = async (id: string) => {
    try {
        const res = await axios.delete(`/admin/delete-role/${id}`, {
            withCredentials: true,
        });
        if (res.status === 200) {
            return res.data;
        }
    } catch (err) {
        console.error("Error deleting role:", err);
        throw err;
    }
};

export const UpdateRoleApi = async (id: string, name: string) => {
    try {
        const res = await axios.put(
            "/admin/update-role",
            { id, name },
            {
                withCredentials: true,
            }
        );
        return res.data.role;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to update role");
    }
};

export const uploadResumeApi = async (resume: string) => {
    try {
        const res = await axios.post(
            "/admin/upload",
            { resume },
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getResumeApi = async () => {
    try {
        const res = await axios.get("/admin/get-resume", {
            withCredentials: true,
        });
        if (res.status === 200) {
            return res.data.resume;
        } else {
            throw new Error("Internal server error");
        }
    } catch (err) {
        console.log(err);
    }
};
