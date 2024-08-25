import axios from "axios";

export const getEducatinApi = async () => {
  try {
    const res = await axios.get("/get-education");
    if (res.status === 200) {
      return res.data.education;
    } else {
      throw new Error("Internal server error");
    }
  } catch (err) {
    console.log(err);
  }
};
