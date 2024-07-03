import { Request, Response } from "express";
import {
    addRoleToFile,
    readRolesFromFile,
    updateRoleInFile,
    writeRolesToFile,
} from "../../utils/fileUtils";
import { readData, writeData } from "../../utils/dataUtils";

export const AddRoleController = (req: Request, res: Response) => {
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
        const newRole = addRoleToFile(name);
        console.log(newRole);
        res.status(201).json({
            success: true,
            message: "Role added successfully",
            role: newRole,
        });
    } catch (error) {
        console.error("Error adding role:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const getRoles = async (req: Request, res: Response) => {
    // console.log("coming in getroles");
    try {
        const roles = readRolesFromFile();
        // console.log("roles", roles);
        return res.status(200).json({ success: true, roles });
    } catch (error) {
        console.error("Error fetching roles:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const deleteRole = async (req: Request, res: Response) => {
    // const { id } = req.body;
    // console.log(req.params.id);
    const id = req.params.id;
    // console.log("coming in backend", id);

    try {
        let roles = readRolesFromFile();
        const index = roles.findIndex((role) => role.id === id);
        if (index === -1) {
            return res
                .status(404)
                .json({ success: false, message: "Role not found" });
        }

        roles = roles.filter((role) => role.id !== id);
        writeRolesToFile(roles);
        res.status(200).json({
            success: true,
            message: "Role deleted successfully",
            roles,
        });
    } catch (error) {
        console.error("Error deleting role:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const updateRole = async (req: Request, res: Response) => {
    const { id, name } = req.body;

    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: "Role name is required" });
    }

    try {
        const updatedRole = updateRoleInFile(id, name);
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
    } catch (error) {
        console.error("Error updating role:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const uploadResume = async (req: Request, res: Response) => {
    const resumeUrl = req.body.resume;
    // console.log("resume: ", resumeUrl);

    const data: any = await readData();
    try {
        data.resume = resumeUrl;
        await writeData(data);
        // console.log("data in controller: ", data);
        return res
            .status(200)
            .json({ message: "Resume URL updated successfully.", data });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error reading data." });
    }
};

export const getResume = (req: Request, res: Response) => {
    const data = readData();

    if (!data) {
        return res.status(404).json({ message: "Data not found." });
    }

    return res.status(200).json({ resume: data.resume });
};
