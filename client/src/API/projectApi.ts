import axios from "axios";

export const AddProjectApi = async (project: any) => {
  // console.log("coming in api", roleName);
  try {
    const res = await axios.post(
      "/admin/add-project",
      { project },
      {
        withCredentials: true,
      }
    );
    // console.log("response in addroleapi", res);
    if (res.status === 201) {
      return res.data.project;
    }
  } catch (err) {
    console.log(err);
  }
};
