import express from "express";
import { CheckAuth } from "../middleware/AuthMiddleware";
import {
  AddProject,
  AddRoleController,
  deleteRole,
  getResume,
  updateAbout,
  updateRole,
  uploadResume,
} from "../controller";
const adminRoutes = express.Router();

adminRoutes.post("/add-role", CheckAuth, AddRoleController);
adminRoutes.delete("/delete-role/:id", CheckAuth, deleteRole);
adminRoutes.put("/update-role", CheckAuth, updateRole);
adminRoutes.post("/upload", CheckAuth, uploadResume);
adminRoutes.get("/get-resume", getResume);
adminRoutes.post("/update-about", CheckAuth, updateAbout);

adminRoutes.post("/add-project", CheckAuth, AddProject);
export default adminRoutes;
