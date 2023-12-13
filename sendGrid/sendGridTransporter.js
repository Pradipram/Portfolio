import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import dotenv from "dotenv"

dotenv.config();

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.API_SENDGRID
    }
  })
);

// Log API key for debugging purposes
// console.log("SendGrid API Key:", process.env.API_SENDGRID);

export { transporter };
