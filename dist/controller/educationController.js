"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEducation = void 0;
const utils_1 = require("../utils");
const getEducation = (req, res) => {
    try {
        const data = (0, utils_1.readData)();
        if (!data) {
            return res.status(404).json({ message: "Data not found." });
        }
        res.status(200).json({ success: true, education: data.education });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
exports.getEducation = getEducation;
