import express from "express";
import {
    getAbout,
    getRoles,
    getUserController,
    Login,
    sendEmailController,
    SingUp,
} from "../controller";
import { CheckAuth } from "../middleware/AuthMiddleware";
// import { sendEmailController } from "../controller/portfolioController";

// router object
const router = express.Router();

// routes
router.post("/sendEmail", sendEmailController);
router.post("/login", Login);
router.post("/signup", SingUp);
router.get("/getuser", CheckAuth, getUserController);

router.get("/get-role", getRoles);
router.get("/get-about", getAbout);

// export
export default router;
