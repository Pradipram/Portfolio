import { Request, Response } from "express";
import { readData, writeData } from "../../utils";

export const getAbout = (req: Request, res: Response) => {
    const data = readData();

    if (!data) {
        return res.status(404).json({ message: "Data not found." });
    }

    return res.status(200).json({ about: data.about });
};

export const updateAbout = (req: Request, res: Response) => {
    const { about } = req.body;

    const data = readData();
    if (!data) {
        return res.status(404).json({ message: "Data not found." });
    }

    data.about = about;
    writeData(data);

    return res
        .status(200)
        .json({ message: "About text updated successfully." });
};
