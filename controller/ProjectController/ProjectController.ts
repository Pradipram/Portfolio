import { Request, Response } from "express";
import { readData, writeData } from "../../utils";

function generateRandomString(length: number = 8): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export const getProject = (req: Request, res: Response) => {
  try {
    const data = readData();
    if (!data) {
      return res.status(404).json({ message: "Data not found." });
    }
    res.status(200).json({ success: true, project: data.project });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const AddProject = (req: Request, res: Response) => {
  let project = req.body.project;
  //   console.log(project);
  project.id = generateRandomString();
  let data = readData();
  if (!data) {
    return res.status(400).json({ success: false, message: "Data not found" });
  }
  //   let AllEducation = data.project;
  //   AllEducation = [...AllEducation, project];
  //   console.log(AllEducation);
  data.project = [...data.project, project];
  //   console.log(data);
  writeData(data);
  res.status(200).json({ success: true, project: data.project });
};
