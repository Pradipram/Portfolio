import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_SENDGRID || "";
// const apiKey = "hellmynameispraidpram";

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: apiKey,
        },
    })
);

// const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//         user: "danial68@ethereal.email",
//         pass: "6X2Gh2QVaSNUXH3VcP",
//     },
// });
// Log API key for debugging purposes
// console.log("SendGrid API Key:", process.env.API_SENDGRID);

export { transporter };
