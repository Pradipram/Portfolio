import express from "express";
import { sendEmailController } from "../controller/portfolioController";

// router object 
const router = express.Router();

// routes
router.post("/sendEmail",sendEmailController);

// export 
export default router;