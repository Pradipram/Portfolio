"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// import sendgridTransport from "nodemailer-sendgrid-transport";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const apiKey = process.env.API_SENDGRID || "";
// const apiKey = "hellmynameispraidpram";
// const transporter = nodemailer.createTransport(
//     sendgridTransport({
//         auth: {
//             api_key: apiKey,
//         },
//     })
// );
const user = process.env.USER;
const password = process.env.PASSWORD;
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "pradipramnawa@gmail.com",
        pass: password,
    },
});
exports.transporter = transporter;
