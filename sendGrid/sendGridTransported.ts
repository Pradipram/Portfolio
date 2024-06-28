import nodemailer from "nodemailer";
// import sendgridTransport from "nodemailer-sendgrid-transport";
import dotenv from "dotenv";

dotenv.config();

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

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "pradipramnawa@gmail.com",
        pass: password,
    },
});
// Log API key for debugging purposes
// console.log("SendGrid API Key:", process.env.API_SENDGRID);

export { transporter };
