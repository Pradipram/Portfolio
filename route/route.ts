import express from "express";
import { Login, sendEmailController, SingUp } from "../controller";
// import { sendEmailController } from "../controller/portfolioController";

// router object
const router = express.Router();

// routes
router.post("/sendEmail", sendEmailController);
router.post("/login", Login);
router.post("/signup", SingUp);

// export
export default router;
