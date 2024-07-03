"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResume = exports.uploadResume = exports.updateRole = exports.deleteRole = exports.getRoles = exports.AddRoleController = void 0;
const fileUtils_1 = require("../../utils/fileUtils");
const dataUtils_1 = require("../../utils/dataUtils");
const AddRoleController = (req, res) => {
    console.log("coming in Addrole controller");
    // const { name } = req.body;
    const name = req.body.roleName;
    console.log("name: ", name);
    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: "Role name is required" });
    }
    try {
        const newRole = (0, fileUtils_1.addRoleToFile)(name);
        console.log(newRole);
        res.status(201).json({
            success: true,
            message: "Role added successfully",
            role: newRole,
        });
    }
    catch (error) {
        console.error("Error adding role:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.AddRoleController = AddRoleController;
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("coming in getroles");
    try {
        const roles = (0, fileUtils_1.readRolesFromFile)();
        // console.log("roles", roles);
        return res.status(200).json({ success: true, roles });
    }
    catch (error) {
        console.error("Error fetching roles:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.getRoles = getRoles;
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { id } = req.body;
    // console.log(req.params.id);
    const id = req.params.id;
    // console.log("coming in backend", id);
    try {
        let roles = (0, fileUtils_1.readRolesFromFile)();
        const index = roles.findIndex((role) => role.id === id);
        if (index === -1) {
            return res
                .status(404)
                .json({ success: false, message: "Role not found" });
        }
        roles = roles.filter((role) => role.id !== id);
        (0, fileUtils_1.writeRolesToFile)(roles);
        res.status(200).json({
            success: true,
            message: "Role deleted successfully",
            roles,
        });
    }
    catch (error) {
        console.error("Error deleting role:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.deleteRole = deleteRole;
const updateRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: "Role name is required" });
    }
    try {
        const updatedRole = (0, fileUtils_1.updateRoleInFile)(id, name);
        if (!updatedRole) {
            return res
                .status(404)
                .json({ success: false, message: "Role not found" });
        }
        return res.status(200).json({
            success: true,
            message: "Role updated successfully",
            role: updatedRole,
        });
    }
    catch (error) {
        console.error("Error updating role:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.updateRole = updateRole;
const uploadResume = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resumeUrl = req.body.resume;
    // console.log("resume: ", resumeUrl);
    const data = yield (0, dataUtils_1.readData)();
    try {
        data.resume = resumeUrl;
        yield (0, dataUtils_1.writeData)(data);
        // console.log("data in controller: ", data);
        return res
            .status(200)
            .json({ message: "Resume URL updated successfully.", data });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error reading data." });
    }
});
exports.uploadResume = uploadResume;
const getResume = (req, res) => {
    const data = (0, dataUtils_1.readData)();
    if (!data) {
        return res.status(404).json({ message: "Data not found." });
    }
    return res.status(200).json({ resume: data.resume });
};
exports.getResume = getResume;
