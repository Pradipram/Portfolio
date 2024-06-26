"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_sendgrid_transport_1 = __importDefault(require("nodemailer-sendgrid-transport"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const apiKey = process.env.API_SENDGRID || "";
// const apiKey = "hellmynameispraidpram";
const transporter = nodemailer_1.default.createTransport((0, nodemailer_sendgrid_transport_1.default)({
    auth: {
        api_key: apiKey,
    },
}));
exports.transporter = transporter;
