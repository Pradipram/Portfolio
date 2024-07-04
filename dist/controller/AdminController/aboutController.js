"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAbout = exports.getAbout = void 0;
const utils_1 = require("../../utils");
const getAbout = (req, res) => {
    const data = (0, utils_1.readData)();
    if (!data) {
        return res.status(404).json({ message: "Data not found." });
    }
    return res.status(200).json({ about: data.about });
};
exports.getAbout = getAbout;
const updateAbout = (req, res) => {
    const { about } = req.body;
    const data = (0, utils_1.readData)();
    if (!data) {
        return res.status(404).json({ message: "Data not found." });
    }
    data.about = about;
    (0, utils_1.writeData)(data);
    return res
        .status(200)
        .json({ message: "About text updated successfully." });
};
exports.updateAbout = updateAbout;
