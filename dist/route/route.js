"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
// import { sendEmailController } from "../controller/portfolioController";
// router object
const router = express_1.default.Router();
// routes
router.post("/sendEmail", controller_1.sendEmailController);
router.post("/login", controller_1.Login);
router.post("/signup", controller_1.SingUp);
router.get("/getuser", AuthMiddleware_1.CheckAuth, controller_1.getUserController);
router.get("/get-role", controller_1.getRoles);
// export
exports.default = router;
