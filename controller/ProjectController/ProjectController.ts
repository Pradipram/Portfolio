import { Request, Response } from "express";
import { readData } from "../../utils";

// export const getProject = (res: Response) => {
//   try {
//     const data = readData();
//     if (!data) {
//       return res.status(404).json({ message: "Data not found." });
//     }
//     res.status(200).json({ success: true, education: data.education });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };
