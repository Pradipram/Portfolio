import express from "express";
import { CheckAuth } from "../middleware/AuthMiddleware";
import {
    AddRoleController,
    deleteRole,
    getResume,
    updateRole,
    uploadResume,
} from "../controller";
const adminRoutes = express.Router();

adminRoutes.post("/add-role", CheckAuth, AddRoleController);
adminRoutes.delete("/delete-role/:id", CheckAuth, deleteRole);
adminRoutes.put("/update-role", CheckAuth, updateRole);
adminRoutes.post("/upload", CheckAuth, uploadResume);
adminRoutes.get("/get-resume", getResume);
export default adminRoutes;
