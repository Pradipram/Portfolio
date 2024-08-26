"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProject = exports.getProject = void 0;
const utils_1 = require("../../utils");
function generateRandomString(length = 8) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const getProject = (req, res) => {
    try {
        const data = (0, utils_1.readData)();
        if (!data) {
            return res.status(404).json({ message: "Data not found." });
        }
        res.status(200).json({ success: true, project: data.project });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
exports.getProject = getProject;
const AddProject = (req, res) => {
    let project = req.body.project;
    //   console.log(project);
    project.id = generateRandomString();
    let data = (0, utils_1.readData)();
    if (!data) {
        return res.status(400).json({ success: false, message: "Data not found" });
    }
    //   let AllEducation = data.project;
    //   AllEducation = [...AllEducation, project];
    //   console.log(AllEducation);
    data.project = [...data.project, project];
    //   console.log(data);
    (0, utils_1.writeData)(data);
    res.status(200).json({ success: true, project: data.project });
};
exports.AddProject = AddProject;
