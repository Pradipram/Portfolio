"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const portfolioController_1 = require("../controller/portfolioController");
// router object 
const router = express_1.default.Router();
// routes
router.post("/sendEmail", portfolioController_1.sendEmailController);
// export 
exports.default = router;
