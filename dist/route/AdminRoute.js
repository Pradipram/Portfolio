"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
const controller_1 = require("../controller");
const adminRoutes = express_1.default.Router();
adminRoutes.post("/add-role", AuthMiddleware_1.CheckAuth, controller_1.AddRoleController);
adminRoutes.delete("/delete-role/:id", AuthMiddleware_1.CheckAuth, controller_1.deleteRole);
adminRoutes.put("/update-role", AuthMiddleware_1.CheckAuth, controller_1.updateRole);
adminRoutes.post("/upload", AuthMiddleware_1.CheckAuth, controller_1.uploadResume);
adminRoutes.get("/get-resume", controller_1.getResume);
adminRoutes.post("/update-about", AuthMiddleware_1.CheckAuth, controller_1.updateAbout);
exports.default = adminRoutes;
